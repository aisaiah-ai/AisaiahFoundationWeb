import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Download, Mail, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WaitlistDialog({ open, onOpenChange }: WaitlistDialogProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) return;
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/waitlist", {
        email,
        name
      });
      
      toast({
        title: "Welcome to the waitlist! 🙏",
        description: "You'll be the first to know when AIsaiah App launches.",
      });
      
      setEmail("");
      setName("");
      onOpenChange(false);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error joining the waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-center justify-center">
            <div className="p-2 rounded-full bg-gradient-to-r from-[hsl(var(--teal-primary))] to-[hsl(var(--purple-primary))]">
              <Download className="w-5 h-5 text-white" />
            </div>
            Join the AIsaiah App Waitlist
          </DialogTitle>
        </DialogHeader>
        
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <Badge 
              variant="secondary" 
              className="mb-4 bg-gradient-to-r from-[hsl(var(--teal-primary))]/10 to-[hsl(var(--purple-primary))]/10 text-[hsl(var(--teal-primary))] border border-[hsl(var(--teal-primary))]/20"
            >
              <Bell className="w-3 h-3 mr-1" />
              Coming Soon
            </Badge>
            <p className="text-muted-foreground">
              Be the first to experience AI-powered spiritual guidance when the AIsaiah App launches. Join thousands on our waitlist!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
                required
                data-testid="input-waitlist-name"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
                data-testid="input-waitlist-email"
              />
            </div>

            <div className="space-y-3">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[hsl(var(--teal-primary))] to-[hsl(var(--purple-primary))] hover:shadow-lg transition-all duration-200"
                disabled={isSubmitting}
                data-testid="button-join-waitlist"
              >
                <Mail className="w-4 h-4 mr-2" />
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="w-full"
                data-testid="button-cancel-waitlist"
              >
                Maybe Later
              </Button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              We'll only email you about the app launch. No spam, ever. 📱✨
            </p>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}