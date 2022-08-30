import Two from "two.js";
import * as Dvocje from "../react-dvojche/ReactDvojcheCore";
import { Scene } from "../react-dvojche/ReactDvojcheCore";

const Group = Dvocje.Group as any;
const Rectangle = Dvocje.Rectangle as any;

export default function TestView001() {
  return (
    <Scene
      options={{
        type: Two.Types.svg,
        width: 800,
        height: 800,
      }}
    >
      <Group>
        <Rectangle
          position={new Two.Vector(200, 200)}
          width={400}
          height={400}
          fill={"blue"}
        />
        <Rectangle
          position={new Two.Vector(200, 600)}
          width={400}
          height={400}
          fill={"yellow"}
        />
        <Rectangle
          position={new Two.Vector(600, 200)}
          width={400}
          height={400}
          fill={"red"}
        />
        <Rectangle
          position={new Two.Vector(600, 600)}
          width={400}
          height={400}
          fill={"green"}
        />
      </Group>
    </Scene>
  );
}
