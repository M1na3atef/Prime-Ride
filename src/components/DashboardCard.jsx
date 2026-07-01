import { Card, CardContent } from "@/components/ui/card";

function DashboardCard({

    title,

    value,

    icon: Icon,

    color,

}) {

    return (

        <Card className="shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl">

            <CardContent className="p-5">

                <div className="flex items-center justify-between">

                    <div className="space-y-2">

                        <p className="text-sm text-slate-500">

                            {title}

                        </p>

                        <h2 className="text-xl md:text-2xl font-bold mt-2 break-words">

                            {value}

                        </h2>

                    </div>

                    <div
                        className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >

                        <Icon className="text-white w-7 h-7" />

                    </div>

                </div>

            </CardContent>

        </Card>

    );

}

export default DashboardCard;