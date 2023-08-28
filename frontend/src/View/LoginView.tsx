import { Link, useNavigate } from "react-router-dom";
import Stars from "../components/Stars";
import { DOMAIN } from "../config";
import { toast } from "react-toastify";

export default function LoginView() {
  const navigate = useNavigate();

  async function signIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries([...formData.entries()])

    try {
      const response = await fetch(`${DOMAIN}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const { token } = await response.json();
      window.sessionStorage.setItem("token", token);
      return navigate("/");
    } catch (err) {
      toast("Something went wrong while login, Please try again");
    }
  }

  return (
    <>
      <main className="flex min-h-screen text-white font-medium">
        <section className="bg-primary w-1/2 p-8 flex flex-col justify-between">
          <Link to="/">
            <img src="/images/KLink.svg" alt="KLink logo" />
          </Link>

          <div className="flex flex-col gap-4 items-center p-8">
            <Stars count={5} />
            <p className="text-3xl text-center">KLink has saved us thousands of hours of work. We’re able to spin up projects and features much faster.</p>
            <div className="text-center">
              <img className="mx-auto" src="/images/person.svg" alt="lori bryson" />
              <p>Lori Bryson</p>
              <p className="text-slate-400">Product Designer, Sisyphus</p>
            </div>
          </div>

          <div className="text-slate-400 flex justify-between">
            <a href="klinkenterprise.com" >&copy; klinkenterprise.com</a>
            <a href="mailto:help@klinkenterprise.com" className="flex items-center gap-1">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 2.00002C14.6667 1.26669 14.0667 0.666687 13.3333 0.666687H2.66668C1.93334 0.666687 1.33334 1.26669 1.33334 2.00002M14.6667 2.00002V10C14.6667 10.7334 14.0667 11.3334 13.3333 11.3334H2.66668C1.93334 11.3334 1.33334 10.7334 1.33334 10V2.00002M14.6667 2.00002L8.00001 6.66669L1.33334 2.00002" stroke="#939DD4" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              help@klinkenterprise.com</a>

          </div>

        </section>
        <section className="w-1/2 p-8 self-center flex flex-col justify-between text-slate-900">
          <div className="mx-auto">
            <h2 className="text-4xl mb-2">Log in</h2>
            <p className="text-slate-600">Welcome back! Please enter you details!</p>
            <form className="mt-10 flex gap-5 flex-col" onSubmit={signIn}>
              <div>
                <label htmlFor="email" className="text-slate-700">Email</label>
                <input type="email" id="email" name="email" required className="input" />
              </div>

              <div>
                <label htmlFor="password" className="text-slate-700">Password</label>
                <input type="password" id="password" name="password" required className="input" />
              </div>

              <button className="bg-primary text-white rounded-md px-[.875rem] py-[.625rem]">Sign in</button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
