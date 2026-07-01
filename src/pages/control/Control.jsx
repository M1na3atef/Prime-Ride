import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {

    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    Square,

} from "lucide-react";

import { moveRobot } from "@/services/robotService";

function Control() {

    const [currentDirection, setCurrentDirection] = useState("Stop");

    const handleMove = async (direction) => {

        setCurrentDirection(direction);

        await moveRobot(direction);

    };
    const handleStop = async () => {

        setCurrentDirection("Stop");

        await moveRobot("Stop");

    };
    return (

        <div className="max-w-3xl mx-auto">

            <Card className="shadow-sm">

                <CardHeader>

                    <CardTitle className="text-center text-2xl">

                        Wheelchair Control

                    </CardTitle>

                </CardHeader>

                <CardContent className="space-y-8">

                    <div className="text-center">

                        <p className="text-slate-500">

                            Current Direction

                        </p>

                        <h2 className="text-3xl font-bold mt-2">

                            {currentDirection}

                        </h2>

                    </div>
                    <Button
                        className="w-1/2 flex justify-center mx-auto"
                        onClick={() => handleMove("Up")}
                    >
                        Move Forward
                    </Button>
                    {/* Up */}

                    <div className="flex justify-center">

                        <Button

                            size="icon"

                            className="w-16 h-16"

                            onMouseDown={() => handleMove("Up")}
                            onMouseUp={handleStop}

                            onTouchStart={() => handleMove("Up")}
                            onTouchEnd={handleStop}

                        >

                            <ArrowUp />

                        </Button>

                    </div>

                    {/* Left Stop Right */}

                    <div className="flex justify-center gap-8">

                        <Button

                            size="icon"

                            className="w-16 h-16"

                            onMouseDown={() => handleMove("Left")}
                            onMouseUp={handleStop}

                            onTouchStart={() => handleMove("Left")}
                            onTouchEnd={handleStop}

                        >

                            <ArrowLeft />

                        </Button>

                        <Button

                            variant="destructive"

                            className="w-20 h-16"

                            onClick={() => handleMove("Stop")}

                        >

                            <Square />

                        </Button>

                        <Button

                            size="icon"

                            className="w-16 h-16"

                            onMouseDown={() => handleMove("Right")}
                            onMouseUp={handleStop}

                            onTouchStart={() => handleMove("Right")}
                            onTouchEnd={handleStop}

                        >

                            <ArrowRight />

                        </Button>

                    </div>

                    {/* Down */}

                    <div className="flex justify-center">

                        <Button

                            size="icon"

                            className="w-16 h-16"

                            onMouseDown={() => handleMove("Down")}
                            onMouseUp={handleStop}

                            onTouchStart={() => handleMove("Down")}
                            onTouchEnd={handleStop}

                        >

                            <ArrowDown />

                        </Button>

                    </div>

                </CardContent>

            </Card>

        </div>

    );

}

export default Control;