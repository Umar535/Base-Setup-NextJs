'use client';

import { Card, Input, Button, Typography } from "antd";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const USERS = [
    {
      email: "admin@example.com",
      password: "admin123",
      role: "admin",
    },
    {
      email: "user@example.com",
      password: "user123",
      role: "user",
    },
    {
      email: "vendor@example.com",
      password: "vendor123",
      role: "vendor",
    },
  ];

    
  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    try {
      const foundUser = USERS.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (!foundUser) {
        toast.error("Invalid email or password");
        setError("email", {
          type: "manual",
          message: "Email is incorrect",
        });
        setError("password", {
          type: "manual",
          message: "Password is incorrect",
        });
        return;
      }

      localStorage.setItem("role", foundUser.role);
      Cookies.set("role", foundUser.role, { expires: 1 });

      toast.success("Login successful!");

      if (foundUser.role === "admin") {
        router.push("/dashboard/admin");
      } else if (foundUser.role === "vendor") {
        router.push("/dashboard/vendor");
      } else {
        router.push("/");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
      <Card
        title={
          <Typography.Title level={3} className="text-center mb-0">
            Login
          </Typography.Title>
        }
        className="w-full max-w-md shadow-md"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder="Enter your password"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Card>
    </div>
  );
}



// 'use client';

// import { Card, Input, Button, Typography } from "antd";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// //import { cookies } from "next/headers";
// import Cookies from "js-cookie";

// // Zod validation
// const loginSchema = z.object({
//   email: z.string().email("Invalid email"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// type LoginForm = z.infer<typeof loginSchema>;

// export default function Login() {
//   const {
//     control,
//     handleSubmit,
//     setError,
//     formState: { errors },
//   } = useForm<LoginForm>({
//     resolver: zodResolver(loginSchema),
//   });

//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const USERS = [
//     {
//       email: "admin@example.com",
//       password: "admin123",
//       role: "admin",
//     },
//     {
//       email: "user@example.com",
//       password: "user123",
//       role: "user",
//     },
//     {
//       email: "vendor@example.com",
//       password: "vendor123",
//       role: "vendor",
//     },
//   ];

//   const onSubmit = async (data: LoginForm) => {
//     setLoading(true);
//     try {
//       const foundUser = USERS.find(
//         (user) => user.email === data.email && user.password === data.password
//       );
  
//       if (!foundUser) {
//         toast.error("Invalid email or password");
  
//         setError("email", {
//           type: "manual",
//           message: "Email is incorrect",
//         });
//         setError("password", {
//           type: "manual",
//           message: "Password is incorrect",
//         });
  
//         return;
//       }
  
//       localStorage.setItem("role", foundUser.role);
//       toast.success("Login successful!");
//       Cookies.set("role", foundUser.role, { expires: 1 });
//       //document.cookie = `role=${foundUser.role}; path=/`;
  
//       if (foundUser.role === "admin") {
//         router.push("/dashboard/admin");
//       } else if (foundUser.role === "vendor") {
//         router.push("/dashboard/vendor");
//       } else {
//         router.push("/");
//       }
//     } catch (error: any) {
//       toast.error(error.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   // const onSubmit = async (data: LoginForm) => {
//   //   setLoading(true);
//   //   try {
//   //     const foundUser = USERS.find(
//   //       (user) => user.email === data.email && user.password === data.password
//   //     );
  
//   //     if (!foundUser) {
        
//   //       toast.error("Invalid email or password");
  
        
//   //       setError("email", {
//   //         type: "manual",
//   //         message: "Email  is incorrect",
//   //       });
//   //       setError("password", {
//   //         type: "manual",
//   //         message: "password is incorrect",
//   //       });
  
//   //       return;
//   //     }
  
//   //     localStorage.setItem("role", foundUser.role);
//   //     toast.success("Login successful!");
  
//   //     if (foundUser.role === "admin") {
//   //       router.push("/dashboard/admin");
//   //     }
//   //     else if(foundUser.role === "vendor"){
//   //       router.push("/dashboard/vendor");
//   //     } 
//   //     else if{
//   //       router.push("/");
//   //     }

//   //   } catch (error: any) {
//   //     toast.error(error.message || "Something went wrong");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
  

//   // const onSubmit = async (data: LoginForm) => {
//   //   setLoading(true);
//   //   try {
//   //     const foundUser = USERS.find(
//   //       (user) => user.email === data.email && user.password === data.password
//   //     );

//   //     if (!foundUser) {
//   //       toast.error("Invalid credentials");
//   //       throw new Error("Invalid credentials");
//   //     }

//   //     localStorage.setItem("role", foundUser.role);
//   //     toast.success("Login successful!");

//   //     if (foundUser.role === "admin") {
//   //       router.push("/dashboard");
//   //     } else {
//   //       router.push("/");
//   //     }
//   //   } catch (error: any) {
//   //     toast.error(error.message || "Something went wrong");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
//       <Card
//         title={
//           <Typography.Title level={3} className="text-center mb-0">
//             Login
//           </Typography.Title>
//         }
//         className="w-full max-w-md shadow-md"
//       >
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Email</label>
//             <Controller
//               control={control}
//               name="email"
//               render={({ field }) => (
//                 <Input
//                   {...field}
//                   type="email"
//                   placeholder="Enter your email"
//                 />
//               )}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Password</label>
//             <Controller
//               control={control}
//               name="password"
//               render={({ field }) => (
//                 <Input.Password
//                   {...field}
//                   placeholder="Enter your password"
//                 />
//               )}
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
//             )}
//           </div>

//           <Button
//             type="primary"
//             htmlType="submit"
//             block
//             loading={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </Button>
//         </form>
//       </Card>
//     </div>
//   );
// }



// 'use client';

// import { Card, Form, Input, Button, Typography } from "antd";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// // Zod validation
// const loginSchema = z.object({
//   email: z.string().email("Invalid email"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// type LoginForm = z.infer<typeof loginSchema>;

// export default function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginForm>({
//     resolver: zodResolver(loginSchema),
//   });

//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const USERS = [
//     {
//       email: "admin@example.com",
//       password: "admin123",
//       role: "admin",
//     },
//     {
//       email: "user@example.com",
//       password: "user123",
//       role: "user",
//     },
//   ];

//   const onSubmit = async (data: LoginForm) => {
//     setLoading(true);
//     try {
//       const foundUser = USERS.find(
//         (user) => user.email === data.email && user.password === data.password
//       );

//       if (!foundUser) {
//         toast.error("Invalid credentials");
//         throw new Error("Invalid credentials");
//       }

//       localStorage.setItem("role", foundUser.role);
//       toast.success("Login successful!");

//       if (foundUser.role === "admin") {
//         router.push("/dashboard");
//       } else {
//         router.push("/");
//       }
//     } catch (error: any) {
//       toast.error(error.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
//       <Card
//         title={<Typography.Title level={3} className="text-center mb-0">Login</Typography.Title>}
//         className="w-full max-w-md shadow-md"
//       >
//         <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
//           <Form.Item label="Email" validateStatus={errors.email ? "error" : ""} help={errors.email?.message}>
//             <Input
//               type="email"
//               placeholder="Enter your email"
//               {...register("email")}
//             />
//           </Form.Item>

//           <Form.Item label="Password" validateStatus={errors.password ? "error" : ""} help={errors.password?.message}>
//             <Input.Password
//               placeholder="Enter your password"
//               {...register("password")}
//             />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit" block loading={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </Button>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   );
// }

