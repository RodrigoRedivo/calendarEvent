import {
  Template,
  Wrapper,
  Events,
  NewEventForm,
} from "../../components/index.js";

function Home() {
  return (
    <Template>
      <Wrapper>
        <Events />
        <NewEventForm />
      </Wrapper>
    </Template>
  );
}

export default Home;
