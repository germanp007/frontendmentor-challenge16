import { Container } from "@mui/material";
import { data } from "./styles/constants";
import Card from "./components/Card";
export const App = () => {
  return (
    <main>
      <Container>
        <div className="grid-container">
          {data.map((ele) => (
            <div key={ele.className} className={ele.className}>
              <Card
                title={ele.title}
                name={ele.name}
                paragraph={ele.paragraph}
                url={ele.url}
                color={ele.color}
                style={ele.style}
              />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
};
