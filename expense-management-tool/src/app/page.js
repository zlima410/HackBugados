import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      {user && (
        <Button
          variant="outlined"
          onClick={handleSignOut}
          style={{ position: "absolute", top: 20, right: 20 }}
        >
          Sign Out
        </Button>
      )}
      {!user ? (
        <Button variant="contained" onClick={handleSignIn} >
          Sign in with Google
        </Button>
      ) : (
        <Stack
          direction={"column"}
          width="500px"
          height="700px"
          border="1px solid black"
          p={2}
          spacing={3}
        >
          <Stack
            direction={"column"}
            spacing={2}
            flexGrow={1}
            overflow="auto"
            maxHeight="100%"
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent={
                  message.role === "assistant" ? "flex-start" : "flex-end"
                }
              >
                <Box
                  bgcolor={
                    message.role === "assistant"
                      ? "primary.main"
                      : "secondary.main"
                  }
                  color="white"
                  borderRadius={16}
                  p={3}
                  sx={{ whiteSpace: "pre-wrap" }}
                >
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </Box>
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <TextField
              label="Message"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <Button
              variant="contained"
              onClick={sendMessage}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </Button>
          </Stack>
        </Stack>
      )}
    </Box>
  );
}
