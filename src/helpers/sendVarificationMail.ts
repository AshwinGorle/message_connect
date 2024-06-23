import { resend } from "@/lib/resend";
import VerificationEmail from "../../EmailTemplates/VarifyCodeEmailTemplate";
import { VerificationEmailProps } from "../../EmailTemplates/VarifyCodeEmailTemplate";
import { ApiResponse } from "@/types/ApiResponse";


export async function sendVerificationEmail(
    username: string, 
    email: string, 
    verifyCode : string) : Promise<ApiResponse>{

        try{   
            await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: [email],
                subject: 'Hello world',
                react: VerificationEmail({username, verifyCode}),
              });

            return {
                success : true,
                message : 'varification email sent successfully'
              }
        }catch(emailError){
          console.log('Verification email sending error', emailError);
          return {
            success : false,
            message : 'Failed to send varification email'
          }
        }
        
}