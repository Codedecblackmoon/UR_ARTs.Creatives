import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppButton from "./WhatsAppButton";

const FULL_BLEED_PATHS = ["/"];

export default function Layout() {
  const { pathname } = useLocation();
  const isFullBleed = FULL_BLEED_PATHS.includes(pathname);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader overHero={isFullBleed} />
      <main className={`flex-1 ${isFullBleed ? "" : "pt-16 lg:pt-20"}`}>
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppButton overHero={isFullBleed} />
    </div>
  );
}