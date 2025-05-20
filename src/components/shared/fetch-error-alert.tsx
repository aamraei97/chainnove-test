import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { TriangleAlert } from "lucide-react";


export function FetchErrorAlert({ error }: { error: string }) {
	return (
		<div className="grid" >
			<Alert variant="destructive">
				<TriangleAlert className="h-6 w-6" />
				<AlertTitle>Heads up!</AlertTitle> 
				<AlertDescription>
					{error}
				</AlertDescription>
			</Alert>
		</div>
	);
}
