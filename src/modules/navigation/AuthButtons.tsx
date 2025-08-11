import { Link } from "@/i18n/navigation";
import { IconUserPlus } from "@tabler/icons-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import LoginLogoutButton from "../ui/LoginLogoutButton";
import TabletAuthDropdown from "./TabletAuthDropdown";
import { useAuth } from "@/hooks/useAuth";

interface AuthButtonsProps {
  variant?: "desktop" | "mobile";
  onItemClick?: () => void;
}

const AuthButtons = ({
  variant = "desktop",
  onItemClick,
}: AuthButtonsProps) => {
  const t = useTranslations();
  const { user } = useAuth();

  if (variant === "mobile") {
    return (
      <div className="space-y-4 ">
        <LoginLogoutButton variant="mobile" onItemClick={onItemClick} />
        {!user && (
          <Link
            href="/signup"
            className="flex items-center justify-center space-x-3 bg-yellow-300 text-secondary hover:bg-yellow-400 transition-colors duration-200 py-4 px-6 rounded-xl font-medium text-base shadow-lg"
            onClick={onItemClick}
          >
            <IconUserPlus size={20} />
            <span>{t("Navigation.register")}</span>
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="hidden lg:flex items-center space-x-4">
      <LanguageSwitcher />
      <TabletAuthDropdown onItemClick={onItemClick} />
    </div>
  );
};

export default AuthButtons;
