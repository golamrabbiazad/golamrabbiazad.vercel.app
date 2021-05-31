import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../styles/Home.module.css";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    alert(JSON.stringify(data));

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "5rem 0" }}>Contact</h1>

      <main className={styles.main}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} placeholder="First name" />
          <input {...register("lastName")} placeholder="Last name" />
          <input type="email" {...register("email")} placeholder="Email" />
          <textarea {...register("message")} cols={30} rows={5}></textarea>

          <input type="submit" />
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
