import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useSockets } from "../context/socketContext";
import Room from "../components/containers/Room";
import Messages from "../components/containers/Messages";
import { useRef } from "react";

export default function Home() {
  const { socket, setUsername, username } = useSockets();

  const usernameref = useRef();

  function handleUserNameRef() {}

  return (
    <div className={styles.container}>
      <Head>
        <title>Chat App</title>
      </Head>

      <div>
        <Room />
        <Messages />
        <p>{socket.id}</p>
      </div>
    </div>
  );
}
