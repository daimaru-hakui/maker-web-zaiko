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
              <Stack spacing={2} className="mt-3">
                <Link
                  className="text-sm cursor-pointer"
                  href="https://myuni.vercel.app/catalog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box _hover={{ textColor: "blue" }}>
                    マイユニポータル
                  </Box>
                </Link>
                {session.data?.user.uid && (
                  <div
                    className="flex items-centertext-sm cursor-pointer"
                    onClick={signOutHandler}
                  >
                    <Box _hover={{ textColor: "blue" }} width="100%">
                      ログアウト
                    </Box>
                  </div>
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
