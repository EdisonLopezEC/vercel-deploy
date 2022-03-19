
import Link from "next/link";
import { FC } from "react";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function index() {

  return (
    <>
    <h2>Pricing Page</h2>
      <h1 className={"title"}>
        {/* Ir a About <a href="/about">About!</a> */}
        Ir a <Link href="/about">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/princing.js</code>
      </p>
    </>

  );
}

index.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
        <DarkLayout>
            {page}
        </DarkLayout>
        </MainLayout>
    );
    }
