import { cache } from "react";
import "server-only";
import { payments, users } from "@/lib/deta";

interface UserProps {
    email?: string | null | undefined;
}

export const getUser = cache(async ({email}: UserProps): Promise<any> => {
    try {
        const res = await users.fetch({ email: email });
        return res.items[0];        
    } catch (error) {
        console.error("Error when fetching user", error);
        throw error;
    }
});

// export const getPaymentHistory = cache(async ({email}: UserProps): Promise<any> => {
//     try {
        
//     } catch (error) {
        
//     }
//   const res = await payments.fetch({
//     user: email,
//   });
// });