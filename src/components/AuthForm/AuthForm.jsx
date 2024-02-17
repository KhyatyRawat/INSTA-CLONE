import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"


const AuthForm = () => {
  const [isLogin , setIsLogin] = useState(true)
  return <>
  <Box border={"1px solid gray"} borderRadius={4} padding={5}>
  <VStack spacing={4}>
    <image src='pubic\logo.png' height={24} cursor={"pointer"} alt='insta' />
  <Input placeholder ="Email"
  fontSize={14}
type="email"
  />
  <Input placeholder ="password"
  fontSize={14}
  type="password"
  />
  {!isLogin ? (
    <Input placeholder =" confirm password"
    fontSize={14}
    type="password"
    />

  ) : null }
<Button w={"full"} colorScheme='blue' size={"Sm" } fontsoze={14}>
  {isLogin ?  "log in " : "Sign up"}
</Button>
<Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
  <Box flex={"2"}  h={"1px"} bg={"gray.400"} />
<Text mx={1} color={"white"}>
OR
</Text>

<Box flex={"2"}  h={"1px"} bg={"gray.400"} />
</Flex>

  <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
  <Image src="pubic\google.png" w={5}  alt='google logo'/>
<Text color={"blue.500"}>
Log In with Google
</Text>
  </Flex>

  </VStack>

  </Box>
  <Box border={"1px solid gray "} borderRadius={4} padding={5}>
 <Flex alignItems={"center"} justifyContent={"center"}>
  <Box mx={2} fontSize={14}>
  {isLogin ? "Dont have an account ?" : "Already have an account ?"}
  </Box>
  <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
    {isLogin ? "Sign Up" : "Log In"}
  </Box>

 </Flex>
  </Box>
  </>
}

export default AuthForm