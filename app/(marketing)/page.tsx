import Container from "@/components/global/container";
import Icons from "@/components/global/icons";
import Wrapper from "@/components/global/wrapper";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks, pricingCards, reviews } from "@/constants";
import { ArrowRight, ChevronRight, Rocket, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { LampContainer } from "@/components/ui/lamp";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0">
      {/* HERO */}
      <Wrapper id="home">
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />
        <Container>
          <div className="flex flex-col items-center justify-center py-20 w-full">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                <Image
                  src="./icons/sparkles-dark.svg"
                  alt="✨"
                  width={24}
                  height={24}
                  className="w-4 h-4"
                />
                Nitro Dashboard v2
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>

            <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
              <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                <span className="bg-gradient-to-r from-[#0548D1] via-[#696DFF] to-[#0548D1] bg-clip-text text-transparent">
                  Decole
                </span>{" "}
                o seu negócio com a melhor plataforma
              </h1>
              <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                Receba dados úteis em tempo real, crie relatórios personalizados
                e aumente o seu faturamento com o Nitro.
              </p>
              <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                <Link
                  href="#"
                  className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
                >
                  <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                    ✨ {"  "} Ative o Nitro, chegou a hora de decolar.
                  </p>
                  <Button
                    size="sm"
                    className="rounded-full hidden lg:flex border border-foreground/20"
                  >
                    Começar
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center mx-auto py-10 md:py-20 w-full">
              <div className="absolute top-1/2 left-1/2 -z10 gradient w-3/4 -translate-x-1/2 -translate-y-1/2 h-3/4 inset-0 blur-[10rem]"></div>
              <div className="-m-2 md:m-4 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:rounded-2xl bg-opacity-50 backdrop-blur-lg">
                <Image
                  src="/assets/dashboard.png"
                  alt="Dashboard"
                  width={1200}
                  height={800}
                  className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                />

                <BorderBeam
                  size={250}
                  duration={12}
                  delay={9}
                  colorFrom="#0548D1"
                  colorTo="#696DFF"
                />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* COMO FUNCIONA */}
      <Wrapper id="about" className="flex flex-col items-center justify-center py-12 pt-20 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="O processo" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Apenas três passos para alavancar as vendas
            </h2>
            <p className="text-muted-foreground mt-6">
              Tenha acesso a dados em tempo real e crier relatórios
              personalizados para aumentar o seu faturamento.
            </p>
          </div>
        </Container>

        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
                >
                  <div className="flex items-center justify-center">
                    <perk.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{perk.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {perk.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* RECURSOS */}
      <Wrapper id="features" className="flex flex-col items-center justify-center py-12 relative">
        <Container className="max-w-md mx-auto text-start md:text-center">
          <SectionBadge title="Recursos" />
          <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
            Descubra recursos poderodos do Nitro
          </h2>
          <p className="text-muted-foreground mt-6">
            Nitro oferece uma série de recursos para você alavancar o seu
            negócio.
          </p>
        </Container>

        <Container>
          <div className="flex items-center justify-center mx-auto mt-8">
            <Icons.feature className="w-auto h-60" />
          </div>
        </Container>

        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start px-0"
                >
                  <div className="flex items-center justify-center">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start">
                    {feature.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* PLANOS */}
      <Wrapper id="pricing" className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md md:mx-auto text-start md:text-center">
            <SectionBadge title="Planos" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Planos para todos os tamanhos de negócio
            </h2>
            <p className="text-muted-foreground mt-6">
              Escolha o plano que melhor se encaixa nas necessidades do seu
              negócio e comece a faturar mais.
            </p>
          </div>
        </Container>

        <Container className="flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
            {pricingCards.map((card) => (
              <Card
                key={card.title}
                className={cn(
                  "flex flex-col w-full border-neutral-700",
                  card.title === "PRO" && "border-2 border-primary"
                )}
              >
                <CardHeader className="borde-2 border-border">
                  <span>{card.title}</span>
                  <CardTitle
                    className={cn(
                      card.title !== "PRO" && "to-muted-foreground"
                    )}
                  >
                    {card.price}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Rocket className="w-4 h-4 fill-primary text-pr" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto w-full">
                  <Link
                    href="#"
                    className={cn(
                      "w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium",
                      card.title !== "PRO" && "!bg-foreground !text-background"
                    )}
                  >
                    {card.buttonText}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Wrapper>

      {/* PROVA SOCIAL */}
      <Wrapper id="testmonials" className="flex flex-col items-center justify-center pt-16 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Cases de Sucesso" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6 text-center">
              O que nossos clientes estão dizendo
            </h2>
            <p className="text-muted-foreground mt-6 text-center">
              Veja o que os nossos clientes estão falando sobre o Nitro.
            </p>
          </div>
        </Container>
        <Container>
          <div className="py-10 md:py-20 w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-20">
              <Marquee pauseOnHover className="[--duration:20s] select-none">
                {firstRow.map((review) => (
                  <figure
                    key={review.name}
                    className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15]"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <User className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s] select-none"
              >
                {secondRow.map((review) => (
                  <figure
                    key={review.name}
                    className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15]"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <User className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background " />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background " />
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* NEWS */}
      <Wrapper id="news" className="flex flex-col items-center justify-center relative">
        <Container>
          <LampContainer>
            <div className="flex flex-col items-center relative w-full text-center">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-2">
                O seu negócio,
                <br />{" "}
                <span className="bg-gradient-to-r from-[#0548D1] via-[#696DFF] to-[#0548D1] bg-clip-text text-transparent">
                  Decolando
                </span>{" "}
                com Nitro.
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                Receba dados úteis em tempo real, crie relatórios personalizados
                e aumente o seu faturamento com o Nitro.
              </p>
              <Button variant="white" className="mt-6" asChild>
                <Link href="/sign-in">
                  Comece de graça
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </LampContainer>
        </Container>
        <Container className="relative z-50">
          <div className="flex items-center justify-center w-full -mt-60">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8 ">
              <div className="flex flex-col items-start gap-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Fique por dentro
                </h4>
                <p className="text-base text-muted-foreground">
                  Participe da Newsletter e fique por dentro das promoções do
                  Nitro.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                <form
                  action="#"
                  className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs"
                >
                  <Input
                    required
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-400 w-full"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="secondary"
                    className="w-full md:w-max"
                  >
                    Inscrever
                  </Button>
                </form>
                <p className="text-sm text-muted-foreground">
                  Ao se inscrever você está de acordo com nossa{" "}
                  <Link href="#">Política de Privacidade</Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default HomePage;
