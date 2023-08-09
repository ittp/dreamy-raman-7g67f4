import {
  Panel,
  InfoRow,
  Select,
  Button,
  Input,
  Group,
  PanelHeader,
  SimpleCell,
  View,
  CardGrid,
} from "@vkontakte/vkui";

// import * as glpi from ".glpi-api";
// glpi
const TicketsView = async (data: []) => {
  if (!data) {
    return "No data loaded";
  }

  // await fetch(data).then((response) => response.json());

  return;
  <View activePanel="info-row">
    <Panel id="info-row">
      <PanelHeader>InfoRow</PanelHeader>
      <Group>
        <SimpleCell>
          <InfoRow header="Общий бюджет">3000 р.</InfoRow>
        </SimpleCell>
      </Group>
      <Group>
        <Header mode="secondary">Информация о пользователе</Header>
        <SimpleCell multiline>
          <InfoRow header="Дата рождения">30 января 1993</InfoRow>
        </SimpleCell>
        <SimpleCell>
          <InfoRow header="Родной город">Ереван</InfoRow>
        </SimpleCell>
        <SimpleCell>
          <InfoRow header="Место работы">Команда ВКонтакте</InfoRow>
        </SimpleCell>
      </Group>
    </Panel>
  </View>;
};

export default function App() {
  console.log(glpi);
  return (
    <View activePanel="profile">
      <Panel id="profile">
        <PanelHeader>VKUI</PanelHeader>
        <Group>
          <SimpleCell>Hello</SimpleCell>
          <SimpleCell>world</SimpleCell>
        </Group>
      </Panel>
    </View>
  );
}
