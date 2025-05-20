"use client";
import { usePathname, useRouter } from "next/navigation";

import {
	Pagination,
	PaginationContent, 
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
	currentPage: number;
	totalPages: number;
	shouldUpdatePath?: boolean;
};

export function PaginationBuilder({ currentPage, totalPages, shouldUpdatePath = true }: Props) {
	const router = useRouter();
	const pathname = usePathname();

	const handlePageClick = (page: number) => {
		console.log(pathname);
		if (shouldUpdatePath) {
			router.push(`${pathname}?page=${page}`);
		}
	};

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious disabled={currentPage === 1} onClick={() => handlePageClick(currentPage - 1)} />
				</PaginationItem>
				{Array.from({ length: totalPages }, (_, index) => (
					<PaginationItem key={index}>
						<PaginationLink isActive={currentPage === index + 1}
							onClick={() => handlePageClick(index + 1)}>
								{index + 1}
						</PaginationLink>
					</PaginationItem>
				))} 
				<PaginationItem>
					<PaginationNext disabled={currentPage === totalPages} onClick={() => handlePageClick(currentPage + 1)} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
