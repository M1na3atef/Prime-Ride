import { Card, CardContent } from "@/components/ui/card";

function InfoCard({

    title,

    value,

    icon: Icon,

}) {

    return (

        <Card className="shadow-sm">

            <CardContent className="flex items-center gap-4 p-4">

                {

                    Icon && (

                        <div className="bg-slate-100 p-3 rounded-xl">

                            <Icon className="w-5 h-5 text-slate-700" />

                        </div>

                    )

                }

                <div>

                    <p className="text-xs text-slate-500">

                        {title}

                    </p>

                    <h3 className="font-semibold text-base break-words">

                        {value || "--"}

                    </h3>

                </div>

            </CardContent>

        </Card>

    );

}

export default InfoCard;