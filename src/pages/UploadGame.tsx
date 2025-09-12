"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const ACCEPTED_APK_TYPES = ["application/vnd.android.package-archive"];

const formSchema = z.object({
  title: z.string().min(1, { message: "Game title is required." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  screenshot1: z
    .any()
    .refine((files) => files?.length == 1, "First screenshot is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  screenshot2: z
    .any()
    .refine((files) => files?.length == 1, "Second screenshot is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  screenshot3: z
    .any()
    .refine((files) => files?.length == 1, "Third screenshot is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  apkFile: z
    .any()
    .refine((files) => files?.length == 1, "APK file is required.")
    .refine(
      (files) => ACCEPTED_APK_TYPES.includes(files?.[0]?.type),
      ".apk files are accepted."
    ),
});

const UploadGame = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const screenshot1Ref = form.register("screenshot1");
  const screenshot2Ref = form.register("screenshot2");
  const screenshot3Ref = form.register("screenshot3");
  const apkFileRef = form.register("apkFile");

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement Supabase file upload
    console.log(values);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Upload Your Game</CardTitle>
            <CardDescription>
              Fill in the details below to submit your game to GStore.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-6"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Game Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Your amazing game" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your game"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="screenshot1"
                    render={() => (
                      <FormItem>
                        <FormLabel>Screenshot 1</FormLabel>
                        <FormControl>
                          <Input type="file" accept="image/*" {...screenshot1Ref} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="screenshot2"
                    render={() => (
                      <FormItem>
                        <FormLabel>Screenshot 2</FormLabel>
                        <FormControl>
                          <Input type="file" accept="image/*" {...screenshot2Ref} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="screenshot3"
                    render={() => (
                      <FormItem>
                        <FormLabel>Screenshot 3</FormLabel>
                        <FormControl>
                          <Input type="file" accept="image/*" {...screenshot3Ref} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="apkFile"
                  render={() => (
                    <FormItem>
                      <FormLabel>Game File (APK)</FormLabel>
                      <FormControl>
                        <Input type="file" accept=".apk" {...apkFileRef} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit Game
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default UploadGame;