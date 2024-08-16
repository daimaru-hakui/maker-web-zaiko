"use client";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Box,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";
import { SidebarList } from "./SidebarList";
import { ChakuraProvider } from "@/libs/providers/ChakuraProvider";
import { KosugiFont } from "@/app/layout";

export const HeaderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const session = useSession();
  const signOutHandler = () => {
    signOut();
  };

  return (
    <>
      <ChakuraProvider>
        <Flex
          w="100%"
          justify="flex-end"
          display={{ base: "flex", lg: "none" }}
        >
          <IoMenu onClick={onOpen} color="white" size="24px" cursor="pointer" />
        </Flex>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody className="text-black">
              <SidebarList onClose={onClose} />
              <Stack spacing={2} className={`mt-3 ${KosugiFont.className}`}>
                <Button variant="outline" _hover={{ textColor: "blue" }}>
                  <Link
                    className="text-sm cursor-pointer w-full"
                    href="https://catalog.myuni.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    マイユニポータル
                  </Link>
                </Button>
                {session.data?.user.uid && (
                  <Button
                    variant="outline"
                    className="flex items-centertext-sm cursor-pointer"
                    onClick={signOutHandler}
                    _hover={{ bgColor: "none" }}
                  >
                    <Box _hover={{ textColor: "blue" }} width="100%">
                      ログアウト
                    </Box>
                  </Button>
                )}
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                閉じる
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ChakuraProvider>
    </>
  );
};
