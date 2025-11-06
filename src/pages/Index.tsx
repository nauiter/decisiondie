import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FooterNauiterMaster from "@/components/FooterNauiterMaster";

type Result = "YES" | "NO" | null;

const Index = () => {
  const [result, setResult] = useState<Result>(null);
  const [isRolling, setIsRolling] = useState(false);

  const rollDie = () => {
    setIsRolling(true);
    setResult(null);

    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      const decision: Result = roll <= 3 ? "YES" : "NO";
      setResult(decision);
      setIsRolling(false);
    }, 1500);
  };

  const getResultStyles = () => {
    if (result === "YES") {
      return "bg-success text-success-foreground";
    }
    if (result === "NO") {
      return "bg-warning text-warning-foreground";
    }
    return "bg-card text-card-foreground";
  };

  const getResultMessage = () => {
    if (result === "YES") {
      return "GO FOR IT! Success is on your side.";
    }
    if (result === "NO") {
      return "ABORT! Reconsider your plan.";
    }
    return "Rolling...";
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <Card className="shadow-2xl border-2 border-border">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Decision Die
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Need to make a choice? Let fate decide for you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div
                className={`min-h-[180px] rounded-xl p-8 flex items-center justify-center transition-all duration-500 ${getResultStyles()} ${
                  isRolling ? "animate-spin-dice" : ""
                }`}
              >
                <div className="text-center">
                  {isRolling ? (
                    <p className="text-2xl font-semibold animate-pulse">Rolling...</p>
                  ) : result ? (
                    <div className="space-y-3">
                      <p className="text-6xl font-bold">{result}</p>
                      <p className="text-lg font-medium">{getResultMessage()}</p>
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-lg">Click the button to roll</p>
                  )}
                </div>
              </div>

              <Button
                onClick={rollDie}
                disabled={isRolling}
                className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                {isRolling ? "ROLLING..." : "ROLL THE DIE"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <FooterNauiterMaster />
    </div>
  );
};

export default Index;
