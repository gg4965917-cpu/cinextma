"use client";

export const dynamic = "force-dynamic"; // Додай цей рядок

import { siteConfig } from "@/config/site";
import { useDocumentTitle } from "@mantine/hooks";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
  // Додамо перевірку, щоб siteConfig не "валив" збірку
  const title = siteConfig?.name ? `404 Not Found | ${siteConfig.name}` : "404 Not Found";
  useDocumentTitle(title);

  return (
    <div className="absolute-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h4 className="text-xl">Not Found</h4>
      <p>The page you are looking for doesn't exist.</p>
      <Button as={Link} href="/" className="mt-8" color="primary">
        Home
      </Button>
    </div>
  );
}
