// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: youtube/api/pfiinnertube/capability_info.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "https://esm.sh/@bufbuild/protobuf@2.0.0/wire";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface CapabilityInfo {
  profile?: string | undefined;
  supportedCapabilities: InnerTubeCapability[];
  disabledCapabilities: InnerTubeCapability[];
  snapshot?: string | undefined;
}

export interface InnerTubeCapability {
  capability?: number | undefined;
  features?: number | undefined;
  experimentFlags?: string | undefined;
}

function createBaseCapabilityInfo(): CapabilityInfo {
  return { profile: undefined, supportedCapabilities: [], disabledCapabilities: [], snapshot: undefined };
}

export const CapabilityInfo: MessageFns<CapabilityInfo> = {
  encode(message: CapabilityInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.profile !== undefined) {
      writer.uint32(10).string(message.profile);
    }
    for (const v of message.supportedCapabilities) {
      InnerTubeCapability.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.disabledCapabilities) {
      InnerTubeCapability.encode(v!, writer.uint32(26).fork()).join();
    }
    if (message.snapshot !== undefined) {
      writer.uint32(42).string(message.snapshot);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CapabilityInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapabilityInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profile = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.supportedCapabilities.push(InnerTubeCapability.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.disabledCapabilities.push(InnerTubeCapability.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.snapshot = reader.string();
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

function createBaseInnerTubeCapability(): InnerTubeCapability {
  return { capability: undefined, features: undefined, experimentFlags: undefined };
}

export const InnerTubeCapability: MessageFns<InnerTubeCapability> = {
  encode(message: InnerTubeCapability, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.capability !== undefined) {
      writer.uint32(8).uint32(message.capability);
    }
    if (message.features !== undefined) {
      writer.uint32(16).uint32(message.features);
    }
    if (message.experimentFlags !== undefined) {
      writer.uint32(50).string(message.experimentFlags);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InnerTubeCapability {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerTubeCapability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.capability = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.features = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.experimentFlags = reader.string();
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
