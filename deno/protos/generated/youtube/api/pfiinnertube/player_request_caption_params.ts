// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: youtube/api/pfiinnertube/player_request_caption_params.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "https://esm.sh/@bufbuild/protobuf@2.0.0/wire";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface PlayerRequestCaptionParams {
  deviceCaptionsOn?: boolean | undefined;
  deviceCaptionsLangPref?: string | undefined;
  viewerSelectedCaptionLangs?: string | undefined;
  ccLangPref?: string | undefined;
  ccLoadPolicyOn?: boolean | undefined;
}

function createBasePlayerRequestCaptionParams(): PlayerRequestCaptionParams {
  return {
    deviceCaptionsOn: undefined,
    deviceCaptionsLangPref: undefined,
    viewerSelectedCaptionLangs: undefined,
    ccLangPref: undefined,
    ccLoadPolicyOn: undefined,
  };
}

export const PlayerRequestCaptionParams: MessageFns<PlayerRequestCaptionParams> = {
  encode(message: PlayerRequestCaptionParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.deviceCaptionsOn !== undefined) {
      writer.uint32(8).bool(message.deviceCaptionsOn);
    }
    if (message.deviceCaptionsLangPref !== undefined) {
      writer.uint32(18).string(message.deviceCaptionsLangPref);
    }
    if (message.viewerSelectedCaptionLangs !== undefined) {
      writer.uint32(26).string(message.viewerSelectedCaptionLangs);
    }
    if (message.ccLangPref !== undefined) {
      writer.uint32(34).string(message.ccLangPref);
    }
    if (message.ccLoadPolicyOn !== undefined) {
      writer.uint32(40).bool(message.ccLoadPolicyOn);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerRequestCaptionParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerRequestCaptionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.deviceCaptionsOn = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.deviceCaptionsLangPref = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.viewerSelectedCaptionLangs = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ccLangPref = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.ccLoadPolicyOn = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
