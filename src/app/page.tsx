import { Box, Button, Container, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaUpRightFromSquare } from "react-icons/fa6";

export default function Page() {
	return (
		<Box
			minH="vh"
			bgImage="url(/2024-03-13_23.30.00.png)"
			bgBlendMode="overlay"
			bgColor="bg/90"
			bgSize="cover"
			bgPos="center"
		>
			<Container centerContent py="48" spaceY="16">
				<VStack>
					<Text
						fontSize={{ smDown: "6xl", sm: "7xl", md: "8xl", lg: "9xl" }}
						fontWeight="black"
						textAlign="center"
						color="white"
						textShadow="0px 0px 24px {colors.green.solid}"
					>
						Coming Soon...
					</Text>
					<Text fontSize="xl">ゆた鯖は下記から参加できます。</Text>
				</VStack>
				<Button colorPalette="green" size="2xl" asChild>
					<NextLink
						href="https://discord.com/invite/WhBMHHzGE5"
						target="_blank"
					>
						Click to join <FaUpRightFromSquare />
					</NextLink>
				</Button>
				<Link colorPalette="green" variant="underline" asChild>
					<NextLink href="https://kirura.github.io/yutasaba" target="_blank">
						本家サイトなんてものは無い <FaUpRightFromSquare />
					</NextLink>
				</Link>
			</Container>
		</Box>
	);
}
