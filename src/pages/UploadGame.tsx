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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";

const gameCategories = [
  "Action",
  "Adventure",
  "Role-Playing",
  "Sports",
  "Racing",
  "Card",
  "Board",
  "Kids",
] as const;

const formSchema = z
  .object({
    title: z.string().min(1, { message: "Game title is required." }),
    description: z
      .string()
      .min(10, { message: "Description must be at least 10 characters." }),
    category: z.enum(gameCategories),
    price: z.coerce.number().min(0, { message: "Price cannot be negative." }),
    paymentMethod: z.string().optional(),
    paymentAccountId: z.string().optional(),
    screenshot1: z
      .any()
      .refine((files) => files?.length == 1, "First screenshot is required."),
    screenshot2: z
      .any()
      .refine((files) => files?.length == 1, "Second screenshot is required."),
    screenshot3: z
      .any()
      .refine((files) => files?.length == 1, "Third screenshot is required."),
    apkFile: z
      .any()
      .refine((files) => files?.length == 1, "APK file is required."),
  })
  .refine(
    (data) => {
      if (data.price > 0) {
        return !!data.paymentMethod && !!data.paymentAccountId;
      }
      return true;
    },
    {
      message: "Payment details are required for paid games.",
      path: ["paymentAccountId"],
    }
  );

const UploadGame = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      paymentMethod: undefined,
      paymentAccountId: "",
    },
  });

  const price = form.watch("price");

  const screenshot1Ref = form.register("screenshot1");
  const screenshot2Ref = form.register("screenshot2");
  const screenshot3Ref = form.register("screenshot3");
  const apkFileRef = form.register("apkFile");

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement Supabase file upload and data saving
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {gameCategories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price (USD)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter 0 for a free game"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {price > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Payment Method</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a method" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="stripe">Stripe</SelectItem>
                              <SelectItem value="paypal">PayPal</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="paymentAccountId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Account ID or Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Stripe ID or PayPal email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="screenshot1"
                    render={() => (
                      <FormItem>
                        <FormLabel>Screenshot 1</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept="image/*"
                            {...screenshot1Ref}
                          />
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
                          <Input
                            type="file"
                            accept="image/*"
                            {...screenshot2Ref}
                          />
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
                          <Input
                            type="file"
                            accept="image/*"
                            {...screenshot3Ref}
                          />
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