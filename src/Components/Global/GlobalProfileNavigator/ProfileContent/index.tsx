import {
  Name,
  Username,
  ProfilePicture,
  Wrapper,
  FollowersSection,
  FollowersWrapper,
  Count,
  Label,
  Splitter,
} from "./styles";

export default function ProfileContent() {
  return (
    <Wrapper>
      <ProfilePicture />

      <Name>Vinícius Resende</Name>
      <Username>@bleszerd</Username>

      <FollowersSection>
        <FollowersWrapper>
          <Count>50</Count>
          <Label>Seguindo</Label>
        </FollowersWrapper>

        <Splitter />

        <FollowersWrapper>
          <Count>123</Count>
          <Label>Seguidores</Label>
        </FollowersWrapper>
      </FollowersSection>
    </Wrapper>
  );
}
