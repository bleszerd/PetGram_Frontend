import { Name, Username, ProfilePicture, Wrapper, FollowersSection, FollowersWrapper, Count, Label, Splitter, } from "./styles";
import { IProfileContentProps } from '../../../../Typescript/components'

export default function ProfileContent({ userData, followersData }: IProfileContentProps) {
  return (
    <Wrapper>
      <ProfilePicture />

      <Name>{userData ? userData.profile.name : 'Loading'}</Name>
      <Username>@{userData ? userData.profile.username : 'Loading'}</Username>

      <FollowersSection>
        <FollowersWrapper>
          <Count>{userData ? followersData.following.count : 'Loading'}</Count>
          <Label>Seguindo</Label>
        </FollowersWrapper>

        <Splitter />

        <FollowersWrapper>
          <Count>{userData ? followersData.followers.count : 'Loading'}</Count>
          <Label>Seguidores</Label>
        </FollowersWrapper>
      </FollowersSection>
    </Wrapper>
  );
}
