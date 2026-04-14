import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import type { ContactFormData } from "@/types";

const COLLECTION_NAME = "contactSubmissions";

function normalizeValue(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export function sanitizeContactFormData(
  formData: ContactFormData
): ContactFormData {
  return {
    firstName: normalizeValue(formData.firstName),
    lastName: normalizeValue(formData.lastName),
    email: normalizeValue(formData.email).toLowerCase(),
    organization: normalizeValue(formData.organization),
    subject: normalizeValue(formData.subject),
    message: formData.message.trim(),
  };
}

export function validateContactFormData(formData: ContactFormData) {
  const clean = sanitizeContactFormData(formData);

  if (!clean.firstName || !clean.lastName || !clean.email || !clean.subject) {
    throw new Error("Please complete all required fields before submitting.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) {
    throw new Error("Please enter a valid email address.");
  }

  if (clean.message.length < 24) {
    throw new Error(
      "Please share a bit more context so we can respond thoughtfully."
    );
  }

  return clean;
}

export async function submitContactSubmission(formData: ContactFormData) {
  if (!isFirebaseConfigured || !db) {
    throw new Error(
      "Firebase is not configured in this environment yet. Add the public Firebase environment variables to enable submissions."
    );
  }

  const clean = validateContactFormData(formData);

  await addDoc(collection(db, COLLECTION_NAME), {
    ...clean,
    fullName: `${clean.firstName} ${clean.lastName}`.trim(),
    source: "website-contact-form",
    status: "new",
    submittedAt: serverTimestamp(),
    submittedAtIso: new Date().toISOString(),
  });
}
