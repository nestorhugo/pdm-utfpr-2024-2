import { View } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import {
  CountrySection,
  organizeByCountry,
  Passenger,
} from "@/helpers/helpers";
import dataPassengers from "@/services/data-passengers";
import FullScreen from "@/components/containers/Fullscren";
import SectionHeader from "@/components/section/SectionHeader";
import SectionBody from "@/components/section/SectionBody";

export default function PassengerList() {
  const [expandedSection, setExpandedSection] = React.useState(null);

  function handleExpand(sectionId: any) {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  }

  const sections = organizeByCountry(dataPassengers);

  const renderItem = ({
    item,
    section,
  }: {
    item: Passenger;
    section: CountrySection;
  }) => (
    <SectionBody
      key={`${section.country}-${item.id}-${Math.random()}`}
      passenger={item}
      show={expandedSection === section.country}
    />
  );

  const renderSectionHeader = ({ section }: { section: CountrySection }) => (
    <SectionHeader
      country={section.country}
      total={section.data.length}
      expand={() => handleExpand(section.country)}
    />
  );

  return (
    <FullScreen>
      <HeaderWithTitle title="Lista" />
      <FlashList
        data={sections}
        estimatedItemSize={100}
        renderItem={({ item, index }) => (
          <View key={`${item.country}-${index}`}>
            {renderSectionHeader({ section: item })}
            {item.data.map((passenger) =>
              renderItem({ item: passenger, section: item })
            )}
          </View>
        )}
        keyExtractor={(item, index) => `${item.country}-${index}`}
      />
    </FullScreen>
  );
}
