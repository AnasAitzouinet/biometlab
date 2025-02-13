"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import React from "react"
import { toast } from "sonner"


export function ContactForm() {

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        // Add name attributes to form elements to ensure they're captured
        const formValues = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };

        console.log("Form Values", formValues);
        formData.append("access_key", "34cc561f-52b8-4385-ba9b-c3f2f08872a5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Message sent successfully");
            form.reset();
        } else {
            console.log("Error", data);
            toast.error("An error occurred");
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-gray-600">
                Nous serions ravis d&apos;entendre parler de vous. Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </div>
            <form method="post" onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 col-span-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2 col-span-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="Your email" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 col-span-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="Your phone" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message" className="min-h-[120px]" />
                </div>
                <Button className="bg-black hover:bg-gray-800">Submit</Button>
            </form>
        </div>
    )
}
