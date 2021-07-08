import  FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React from 'react'
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SideBarOption from './SideBarOption';

function SideBar() {
    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>AYMAN YE MAALEM</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        Ayman Smati
                    </h3>

                </SideBarInfo>
                <CreateIcon/>

            </SideBarHeader>
            <SideBarOption Icon={InsertCommentIcon} title="Threads"/>
            <SideBarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SideBarOption Icon={DraftsIcon} title="Saved items"/>
            <SideBarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SideBarOption Icon={PeopleAltIcon} title="People & user groups"/>
            <SideBarOption Icon={AppsIcon} title="Apps"/>
            <SideBarOption Icon={FileCopyIcon} title="File Browser"/>
            <SideBarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr/>
            <SideBarOption Icon={ExpandMoreIcon} title=" Channels"/>
            <hr/>
            <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel"/>



         

        </SideBarContainer>
    )
}

export default SideBar

const SideBarContainer = styled.div`
color: white;
background-color: var(--slack-color);
flex: 0.2;
border-top: 1px solid #49274b;
max-width: 275px;
margin-top: 40px;
`;
const SideBarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;

> .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 1000px;
}
`;
const SideBarInfo = styled.div`
flex: 1;

> h2{
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}
> h3{
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
}

> h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green !important;
}
`;