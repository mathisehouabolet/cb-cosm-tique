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
    <section className="bg-gradient-to-r from-[#f4d4e6] to-[#ffc0d9] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength, i) => {
            const Icon = strength.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2c1810]/10">
                  <Icon className="h-8 w-8 text-[#2c1810]" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-[#2c1810]">
                  {strength.title}
                </h3>
                <p className="text-sm text-[#2c1810]/80">
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
