import { Leaf, CreditCard, Truck } from "lucide-react";

export function StrengthsBar() {
  const strengths = [
    {
      icon: Leaf,
      title: "100% Naturel",
      description: "Nos produits sont entièrement naturels et biologiques",
    },
    {
      icon: CreditCard,
      title: "Paiement Simple",
      description: "virement Interac ou paiement en espèces",
    },
    {
      icon: Truck,
      title: "Livraison Flexible",
      description: "livraison à vos frais par la poste ou gratuite sous certaines conditions",
    },
  ];

  return (
    <section className="bg-[#4b2c20] py-16 text-[#f7f2ea] md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength, i) => {
            const Icon = strength.icon;
            return (
              <div key={strength.title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f7f2ea]/10">
                  <Icon className="h-8 w-8 text-[#f7f2ea]" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-[#f7f2ea]">
                  {strength.title}
                </h3>
                <p className="text-sm text-[#f7f2ea]/80">
                  {strength.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
