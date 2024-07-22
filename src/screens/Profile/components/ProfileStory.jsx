import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ProfileStory() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stories}>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/a70b/2387/3b980a6618ac762aedb38933fa0860a4?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VaaGHQxmWJF8hGPN01umVkmOzSPUt55IRwOnHDOIZ77DISSojMqsuZmV5YAikIKlazUPeozoa2Ara8PKNh-FMXrsaOLipi4gK--RSjAQ9m4sUBVc-nrkkhO10sT~kVm1IMCd-fI8ds-c~ZFdDLNyTmk94Qy~zY14Rg3TDoO2TsHU8xyMRPrUTvej3-57Daf5KS0y-jB4syoY9ciWqtpbs9hXudynO2qUMJw9emxfAtEXhNlkyckfmCb~ceEkSfyPhSJjd~v3j2pkmJ80kDTIr8Ue4n~81npdijQ3lBWQgLN9-3RQlAvSqDAs5Hi6qoF4vkoD0B4NdfTl5O1t~LAi9w__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/a70b/2387/3b980a6618ac762aedb38933fa0860a4?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VaaGHQxmWJF8hGPN01umVkmOzSPUt55IRwOnHDOIZ77DISSojMqsuZmV5YAikIKlazUPeozoa2Ara8PKNh-FMXrsaOLipi4gK--RSjAQ9m4sUBVc-nrkkhO10sT~kVm1IMCd-fI8ds-c~ZFdDLNyTmk94Qy~zY14Rg3TDoO2TsHU8xyMRPrUTvej3-57Daf5KS0y-jB4syoY9ciWqtpbs9hXudynO2qUMJw9emxfAtEXhNlkyckfmCb~ceEkSfyPhSJjd~v3j2pkmJ80kDTIr8Ue4n~81npdijQ3lBWQgLN9-3RQlAvSqDAs5Hi6qoF4vkoD0B4NdfTl5O1t~LAi9w__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 2</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/a70b/2387/3b980a6618ac762aedb38933fa0860a4?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VaaGHQxmWJF8hGPN01umVkmOzSPUt55IRwOnHDOIZ77DISSojMqsuZmV5YAikIKlazUPeozoa2Ara8PKNh-FMXrsaOLipi4gK--RSjAQ9m4sUBVc-nrkkhO10sT~kVm1IMCd-fI8ds-c~ZFdDLNyTmk94Qy~zY14Rg3TDoO2TsHU8xyMRPrUTvej3-57Daf5KS0y-jB4syoY9ciWqtpbs9hXudynO2qUMJw9emxfAtEXhNlkyckfmCb~ceEkSfyPhSJjd~v3j2pkmJ80kDTIr8Ue4n~81npdijQ3lBWQgLN9-3RQlAvSqDAs5Hi6qoF4vkoD0B4NdfTl5O1t~LAi9w__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 3</Text>
      </View>

      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/a70b/2387/3b980a6618ac762aedb38933fa0860a4?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VaaGHQxmWJF8hGPN01umVkmOzSPUt55IRwOnHDOIZ77DISSojMqsuZmV5YAikIKlazUPeozoa2Ara8PKNh-FMXrsaOLipi4gK--RSjAQ9m4sUBVc-nrkkhO10sT~kVm1IMCd-fI8ds-c~ZFdDLNyTmk94Qy~zY14Rg3TDoO2TsHU8xyMRPrUTvej3-57Daf5KS0y-jB4syoY9ciWqtpbs9hXudynO2qUMJw9emxfAtEXhNlkyckfmCb~ceEkSfyPhSJjd~v3j2pkmJ80kDTIr8Ue4n~81npdijQ3lBWQgLN9-3RQlAvSqDAs5Hi6qoF4vkoD0B4NdfTl5O1t~LAi9w__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 4</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.newStoryButton}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.storyLabel}>New Story</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 15,
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyLabel: {
    color: '#000000',
    marginTop: 3,
  },
  plusSign: {
    fontSize: 40,
  },
  newStoryButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
