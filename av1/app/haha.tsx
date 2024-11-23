import { View, Text, SectionList, StyleSheet } from "react-native";
import React from "react";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import { organizeByCountry } from "@/helpers/helpers";
import dataPassengers from "@/services/data-passengers";
import FullScreen from "@/components/containers/Fullscren";
import FlexRow from "@/components/FlexRow";
import SectionHeader from "@/components/section/SectionHeader";
import SectionBody from "@/components/section/SectionBody";

export default function Haha() {
  const [expandedSection, setExpandedSection] = React.useState(null);

  function handleExpand(sectionId: any) {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  }

  return (
    <FullScreen>
      <HeaderWithTitle title="Lista" />
      <SectionList
        sections={organizeByCountry(dataPassengers)}
        keyExtractor={(item, index) => `${item.id.toString()}-${index}`}
        renderItem={({ item, section }) => (
          <SectionBody
            passenger={item}
            show={expandedSection === section.country}
          />
        )}
        renderSectionHeader={({ section }) => (
          <SectionHeader
            country={section.country}
            total={section.data.length}
            expand={() => handleExpand(section.country)}
          />
        )}
      />
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    marginRight: 10,
  },
});
