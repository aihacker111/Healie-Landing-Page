import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const schema = z.object({
        email: z.string().email(),
      });
      
      const validatedData = schema.parse(req.body);
      
      // In a real app, you would save this to a database or send to a newsletter service
      // For demo purposes, we'll just return a success response
      
      res.status(200).json({ 
        success: true, 
        message: "Successfully subscribed to newsletter" 
      });
    } catch (error) {
      let message = "Failed to subscribe to newsletter";
      
      if (error instanceof z.ZodError) {
        message = error.errors[0].message;
      }
      
      res.status(400).json({ 
        success: false, 
        message
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
