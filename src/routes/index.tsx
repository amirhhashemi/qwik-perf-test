import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { NavigationMenu, NavigationItem } from "../components/navigation-menu";

export default component$(() => {
  const items = [
    {
      img: "alex-gruber-PyoVjVgOfHg-unsplash.jpg",
    },
    {
      img: "andrei-ionov-O0eomEdcums-unsplash.jpg",
    },
    {
      img: "daniel-lezuch-iRjx7w3O8v0-unsplash.jpg",
    },
    {
      img: "domie-sharpin-eRgFlbnzb48-unsplash.jpg",
    },
    {
      img: "dusty-TcG-GUh-Br8-unsplash.jpg",
    },
    {
      img: "felix-rottmann-nynSCWcbVa4-unsplash.jpg",
    },
    {
      img: "karthik-sreenivas-IKf4BZ-C--Q-unsplash.jpg",
    },
    {
      img: "maddy-weiss-LVGRrZ59Iek-unsplash.jpg",
    },
    {
      img: "ma-deldari-329lE7Q7I54-unsplash.jpg",
    },
    {
      img: "markus-spiske-WfbBHQrQDao-unsplash.jpg",
    },
    {
      img: "marlin-clark-kRGuLooeAO0-unsplash.jpg",
    },
    {
      img: "michail-dementiev-6qVcFc1r7WU-unsplash.jpg",
    },
    {
      img: "moises-ferreira-bF6yfWzBqPc-unsplash.jpg",
    },
    {
      img: "moises-ferreira-_ZIzhLxDpJA-unsplash.jpg",
    },
    {
      img: "neha-maheen-mahfin-AOpV_IK8tOw-unsplash.jpg",
    },
    {
      img: "neha-maheen-mahfin-FtiAj6ggKnU-unsplash.jpg",
    },
    {
      img: "neha-maheen-mahfin-TOKRHlWE56s-unsplash.jpg",
    },
    {
      img: "nicolas-houdayer-W5m-jv33nDM-unsplash.jpg",
    },
    {
      img: "nicolas-houdayer-wkPHrMu24ms-unsplash.jpg",
    },
    {
      img: "photo-is-beauty-to-u-m2y-eByFnvc-unsplash.jpg",
    },
    {
      img: "richard-sagredo-ZC2PWF4jTHc-unsplash.jpg",
    },
    {
      img: "rod-long-emzuopV7SFM-unsplash.jpg",
    },
    {
      img: "rod-long-MZ0m9XRO06s-unsplash.jpg",
    },
    {
      img: "ryan-ancill-DmwHIIAm4fk-unsplash.jpg",
    },
    {
      img: "sina-bahar-acymqtssT7A-unsplash.jpg",
    },
    {
      img: "sina-bahar-SbJzkb93CFs-unsplash.jpg",
    },
    {
      img: "s-tsuchiya-rE87Px3JbUY-unsplash.jpg",
    },
    {
      img: "wolfgang-hasselmann-y3UlPywSUcs-unsplash.jpg",
    },
    {
      img: "zongnan-bao-yMxJEUCJhHY-unsplash.jpg",
    },
  ];

  return (
    <div>
      <NavigationMenu>
        <NavigationItem q:slot="item">
          <div q:slot="trigger">item 1</div>
          <div q:slot="content">
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
            <div>item 4</div>
          </div>
        </NavigationItem>
        <NavigationItem q:slot="item">
          <div q:slot="trigger">item 2</div>
          <div q:slot="content">
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
          </div>
        </NavigationItem>
        <NavigationItem q:slot="item">
          <div q:slot="trigger">item 3</div>
          <div q:slot="content">
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
          </div>
        </NavigationItem>
      </NavigationMenu>
      {items.map((item) => {
        return (
          <div>
            <h1>Title</h1>
            <img src={item.img} loading="lazy" />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        );
      })}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik City",
};
