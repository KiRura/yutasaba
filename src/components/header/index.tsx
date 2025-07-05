import { Box, Container, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ColorModeButton } from "../ui/color-mode";

export function Header() {
	return (
		<Box
			pos="sticky"
			top={0}
			zIndex="docked"
			bg="bg/90"
			backdropFilter="blur(12px)"
			borderBottomWidth={1}
		>
			<Container>
				<Flex align="center" justify="space-between" py="2">
					<Link fontWeight="light" fontSize="3xl" asChild>
						<NextLink href="/">社不の最終処理場</NextLink>
					</Link>
					<ColorModeButton />
				</Flex>
			</Container>
		</Box>
	);
}
