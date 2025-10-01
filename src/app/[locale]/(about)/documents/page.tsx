import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function DocumentsPage() {
  const t = useTranslations("Documents");

  const documents = [
    {
      id: "economia",
      url: "https://jawtdsvsgowidjmyzqby.supabase.co/storage/v1/object/public/nodess/economia.pdf",
      icon: <FileText className="w-8 h-8 text-primary" />,
    },
    {
      id: "notariaDocument",
      url: "https://jawtdsvsgowidjmyzqby.supabase.co/storage/v1/object/public/nodess/notaria43.pdf",
      icon: <FileText className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 pb-12 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((document) => (
            <Card
              key={document.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  {document.icon}
                  <div>
                    <CardTitle className="text-xl">
                      {t(`${document.id}.title`)}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 text-base">
                  {t(`${document.id}.description`)}
                </CardDescription>
                <Button asChild className="w-full" size="lg">
                  <a
                    href={document.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    {t(`${document.id}.viewDocument`)}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">{t("footerNote")}</p>
        </div>
      </div>
    </div>
  );
}
