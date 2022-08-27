import { component$, Slot, useStore } from "@builder.io/qwik";

export const NavigationMenu = component$(() => {
  return (
    <div className="bg-rose-100 flex gap-2">
      <Slot name="item" />
    </div>
  );
});

export const NavigationItem = component$(() => {
  const open = useStore({
    open: false,
  });

  return (
    <div>
      <div
        className="border-2 border-black"
        onPointerEnter$={() => {
          open.open = true;
        }}
        onPointerLeave$={() => {
          open.open = false;
        }}
      >
        <Slot name="trigger" />
      </div>
      {open.open && (
        <div className="inline-block">
          <Slot name="content" />
        </div>
      )}
    </div>
  );
});
