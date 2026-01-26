import { useState } from "react";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactDialog = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!name || !email || !message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setName("");
    setEmail("");
    setMessage("");
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="hero" size="lg" className="gap-2">
          <Mail size={18} />
          Contact Me
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-md bg-card border-border">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl">Get In Touch</AlertDialogTitle>
          <AlertDialogDescription className="text-muted-foreground">
            Have a project in mind or want to collaborate? Send me a message!
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name
            </Label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Message
            </Label>
            <div className="relative">
              <MessageSquare
                size={16}
                className="absolute left-3 top-3 text-muted-foreground"
              />
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pl-10 min-h-[100px] bg-secondary border-border resize-none"
              />
            </div>
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel className="border-border">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubmit}
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            <Send size={16} />
            Send Message
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ContactDialog;
