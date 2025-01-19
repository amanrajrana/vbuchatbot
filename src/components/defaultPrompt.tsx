import { AI_NAME } from "@/constant/botVariable";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function DefaultPrompt() {
  return (
    <div>
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-lg">I am {AI_NAME}</CardTitle>
        </CardHeader>
        <CardContent>
          I&#39;m here to solve assist you with any queries you have. Feel free
          to ask me anything.
        </CardContent>
      </Card>
    </div>
  );
}
