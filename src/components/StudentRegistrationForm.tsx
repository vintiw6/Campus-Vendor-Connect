import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const currentYear = 2024;
const years = Array.from({ length: 6 }, (_, i) => currentYear + i);

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits"),
  email: z.string().email("Please enter a valid email address"),
  department: z.string().min(1, "Please select a department"),
  passingYear: z.string().min(1, "Please select passing year"),
});

const StudentRegistrationForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      department: "",
      passingYear: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Registration values:", values);
    toast({
      title: "Registration Successful!",
      description: "Your login credentials will be sent to your registered email address.",
      duration: 5000,
    });
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Enter your mobile number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your department" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="cse-ai">B.Tech (Honours) in Computer Science Engineering (Artificial Intelligence)</SelectItem>
                  <SelectItem value="cse-ds">B.Tech (Honours) in Computer Science Engineering (Data Science)</SelectItem>
                  <SelectItem value="civil">B.Tech (Honours) in Civil Engineering</SelectItem>
                  <SelectItem value="mining">Diploma in Mining Engineering</SelectItem>
                  <SelectItem value="safety">Diploma in Industrial Safety & Fire Safety Engineering</SelectItem>
                  <SelectItem value="structural">Structural Engineering</SelectItem>
                  <SelectItem value="urban">Urban Planning</SelectItem>
                  <SelectItem value="environmental">Environmental and Water Resources Engineering</SelectItem>
                  <SelectItem value="energy">Energy and Environmental Engineering</SelectItem>
                  <SelectItem value="biomedical">Biomedical Engineering & Bioinformatics</SelectItem>
                  <SelectItem value="vlsi">Microelectronics and VLSI</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passingYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passing Year</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your passing year" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Register</Button>
      </form>
    </Form>
  );
};

export default StudentRegistrationForm;
