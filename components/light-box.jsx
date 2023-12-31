"use client"
import React, { useState, useRef, FormEvent } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import LoadingDots from "./loading-dots";

export function LightBox({ className }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showNameAlert, setNameAlert] = useState(false);
  const [showPhoneAlert, setPhoneAlert] = useState(false);
  const [showEmailAlert, setEmailAlert] = useState(false);

  function validate() {
    if (name === "") {
      setNameAlert(true);
      setPhoneAlert(false);
      setEmailAlert(false);
      return false;
    } else if (!/^[A-Za-z -]{3,25}$/.test(name)) {
      setNameAlert(true);
      setPhoneAlert(false);
      setEmailAlert(false);
      return false;
    }
    setNameAlert(false);
    if (email === "") {
      setEmailAlert(true);
      setNameAlert(false);
      setPhoneAlert(false);
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailAlert(true);
      setNameAlert(false);
      setPhoneAlert(false);
      return false;
    }
    setEmailAlert(false);
    if (phone === "") {
      setPhoneAlert(true);
      setNameAlert(false);
      setEmailAlert(false);
      return false;
    } else if (!/^\d{10}$/.test(phone)) {
      setPhoneAlert(true);
      setNameAlert(false);
      setEmailAlert(false);
      return false;
    }
    setPhoneAlert(false);

    return true;
  }

  const openDialog = () => {
    setTimeout(() => {
      setShowDialog(true);
    }, 2000);
    setTimeout(() => {
      setShowDialog(false);
    }, 8000);
  };

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bk8oskp",
      "template_v9bmsfi",
      form.current,
      "I6FAmKW2ysS6QCAdJ"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");

      sendEmail(e);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      openDialog();
    }
  };

  return (
    <div className={cn("space-x-4 pt-0 sm:pt-10 ", className)} aria-label="contact form">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="border-2 font-heading text-xl text-black border-green-300 border-black bg-gradient-to-b from-green-500 to-blue-600 hover:to-green-500 hover:from-blue-600  w-full"
            size="lg"
            aria-label="contact us"
          >
            Contact Us
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
          </DialogHeader>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4" aria-label="enter your name">
                <Label htmlFor="name" className="sub-gradient font-semibold">
                  Name<span className="error-gradient"> *</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  className="md:col-span-3 caret-blue-500 focus:caret-indigo-500"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {showNameAlert && (
                  <div className=" error-gradient text-sm w-full">
                    <p>Name is Empty or Invalid.</p>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4" aria-label="enter your email">
                <Label htmlFor="email" className="sub-gradient font-semibold">
                  Email<span className="error-gradient"> *</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  className="md:col-span-3 caret-blue-500 focus:caret-indigo-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {showEmailAlert && (
                  <div className=" error-gradient text-sm w-full">
                    <p>Email is Empty or Invalid.</p>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4" aria-label="enter your phone number">
                <Label htmlFor="phone" className="sub-gradient font-semibold">
                  Phone<span className="error-gradient"> *</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  className="md:col-span-3 caret-blue-500 focus:caret-indigo-500"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {showPhoneAlert && (
                  <div className=" error-gradient text-sm w-full">
                    <p className="w-full">Phone is Empty or Invalid.</p>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4" aria-label="enter your message optional">
                <Label htmlFor="message" className="sub-gradient font-semibold">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  className="md:col-span-3 h-28 caret-blue-500 focus:caret-indigo-500"
                  placeholder="Type your message here."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            {showDialog && (
              <Dialog className="pb-2">
                <DialogTrigger asChild>
                  <div className="text-center success-gradient text-sm ">
                    <p>
                      Your details has been submitted. Our team will contact you
                      shortly.
                    </p>
                  </div>
                </DialogTrigger>
              </Dialog>
            )}
            <DialogFooter>
              <Button type="submit" className="w-40 mt-2  " disabled={loading} aria-label="Submit contact form">
                {loading ? <LoadingDots color="red" /> : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
