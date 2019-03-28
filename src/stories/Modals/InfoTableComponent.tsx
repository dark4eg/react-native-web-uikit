import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../../Themes/Colors";

const styles = StyleSheet.create({
  codeContainer: {
    backgroundColor: Colors.veryVeryLightGray,
    borderWidth: 1,
    borderColor: Colors.themeDark,
    color: Colors.themeDark,
    borderRadius: 4,
    padding: 5,
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    fontWeight: "bold",
  },
});

const containerStylesType = `{
    top: string | number;
    left: string | number;
    width: string | number;
    height: string | number;
    backgroundColor?: string;
    borderRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
}`;

const containerStylesTypeDefinition = {
  property: "containerStyles",
  propType: { name: containerStylesType },
  required: true,
  defaultValue: <Text>-</Text>,
  description: <Text>-</Text>,
};

const isModalOpenTypeDefinition = {
  property: "isModalOpen",
  propType: { name: "boolean" },
  required: true,
  defaultValue: <Text>-</Text>,
  description: <Text>-</Text>,
};

const componentTypeDefinition = {
  property: "component",
  propType: { name: "React.ReactNode" },
  required: true,
  defaultValue: <Text>-</Text>,
  description: <Text>-</Text>,
};

const idTypeDefinition = {
  property: "id",
  propType: { name: "number" },
  required: false,
  defaultValue: (
    <View style={styles.codeContainer}>
      <Text>undefined</Text>
    </View>
  ),
  description: (
    <View style={{ flexDirection: "column", width: 400 }}>
      <Text>two modals with same id can't be render. Id used for</Text>
      <View style={styles.codeContainer}>
        <Text>Subscriber.changeModalPosition(id, positionShift)</Text>
      </View>
      <View style={styles.codeContainer}>
        <Text>Subscriber.stretchModal(id, stretchingValue? = "10%")</Text>
      </View>
      <View style={styles.codeContainer}>
        <Text>Subscriber.hideModal(id)</Text>
      </View>
    </View>
  ),
};
const onBackdropPressTypeDefinition = {
  property: "onBackdropPress",
  propType: { name: "Function" },
  required: false,
  defaultValue: (
    <View style={styles.codeContainer}>
      <Text>undefined</Text>
    </View>
  ),
  description: <Text>if defined backdrop press won't hide modal automatically</Text>,
};

const verticalDirectionTypeDefinition = {
  property: "verticalDirection",
  propType: { name: "boolean" },
  required: false,
  defaultValue: (
    <View style={styles.codeContainer}>
      <Text>false</Text>
    </View>
  ),
  description: <Text>-</Text>,
};

const initialPositionTypeDefinition = {
  property: "initialPosition",
  propType: { name: "string | number" },
  required: false,
  defaultValue: (
    <View style={[styles.codeContainer, { alignItems: "flex-start" }]}>
      <Text>if (verticalDirection) modal.initialPosition = 2 * windowHeight</Text>
      <Text>modal.initialPosition = -windowWidth</Text>
    </View>
  ),
  description: <Text>modal move from this position when will appear</Text>,
};

const dontShowBackdropTypeDefinition = {
  property: "dontShowBackdrop",
  propType: { name: "boolean" },
  required: false,
  defaultValue: (
    <View style={styles.codeContainer}>
      <Text>false</Text>
    </View>
  ),
  description: <Text>-</Text>,
};

const shadowTypeDefinition = {
  property: "shadow",
  propType: { name: "number" },
  required: false,
  defaultValue: (
    <View style={styles.codeContainer}>
      <Text>12</Text>
    </View>
  ),
  description: <Text>use shadow for control modal height relatively another components</Text>,
};

const TableComponent = () => {
  const propDefinitions = [
    componentTypeDefinition,
    containerStylesTypeDefinition,
    isModalOpenTypeDefinition,
    idTypeDefinition,
    onBackdropPressTypeDefinition,
    verticalDirectionTypeDefinition,
    initialPositionTypeDefinition,
    dontShowBackdropTypeDefinition,
    shadowTypeDefinition,
  ];
  const props = propDefinitions.map(({ property, propType, required, description, defaultValue }) => {
    return (
      <tr key={property}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 150, marginRight: 15 }}>
            <Text>
              {property}
              {required ? <Text style={{ color: "red" }}>*</Text> : null}
            </Text>
          </View>
          <View style={[styles.codeContainer, { width: 400, marginRight: 15 }]}>
            <Text>{propType.name}</Text>
          </View>
          <View style={{ width: 400, marginRight: 15 }}>{defaultValue}</View>
          <View style={{ width: 400 }}>{description}</View>
        </View>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: 150, marginRight: 15 }}>
              <Text style={styles.headerText}>name</Text>
            </View>
            <View style={{ width: 400, marginRight: 15 }}>
              <Text style={styles.headerText}>type</Text>
            </View>
            <View style={{ width: 400, marginRight: 15 }}>
              <Text style={styles.headerText}>default</Text>
            </View>
            <View style={{ width: 400 }}>
              <Text style={styles.headerText}>description</Text>
            </View>
          </View>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  );
};

export default TableComponent;
