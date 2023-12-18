import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import ProfileComment from './ProfileComment'
import ProfileForum from './ProfileForum'
import ProfileReply from './ProfileReply'

const ProfileTabs = ({ dataComment, dataForum }) => {
  return (
    <Tabs variant='soft-rounded' colorScheme='green'>
      <TabList>
        <Tab>Forum</Tab>
        <Tab>Comment</Tab>
        <Tab>Reply</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ProfileForum data={dataForum} />
        </TabPanel>
        <TabPanel>
          <ProfileComment data={dataComment} />
        </TabPanel>
        <TabPanel>
          <ProfileReply />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default ProfileTabs