window.GAME_DATA = {
  "version": "v0.5",
  "updated": "2026-07-01",
  "deckMeta": {
    "all": {
      "label": "\u5168\u90e8\u5361\u724c",
      "count": 173,
      "description": "v0.5 \u7db2\u9801\u5716\u9451\u6536\u9304\u56db\u7a2e\u4e3b\u5361\u5806\u8207\u7279\u6b8a\u5361\u3002"
    },
    "event": {
      "label": "\u4e8b\u4ef6\u5361",
      "count": 45,
      "description": "\u7a81\u767c\u72c0\u6cc1\uff0c\u8003\u9a57\u73fe\u91d1\u3001\u5099\u80ce\u8207\u98a8\u96aa\u627f\u53d7\u529b\u3002"
    },
    "opportunity": {
      "label": "\u6a5f\u6703\u5361",
      "count": 45,
      "description": "\u5e36\u4f86\u73fe\u91d1\u3001\u52a0\u85aa\u3001\u6298\u6263\u3001\u4fdd\u7559\u6548\u679c\u6216\u5099\u80ce\u88dc\u5f37\u3002"
    },
    "asset": {
      "label": "\u8cc7\u7522\u5361",
      "count": 45,
      "description": "\u505c\u5728\u8cc7\u7522\u5e02\u5834\u6642\u7ffb\u724c\u8cfc\u8cb7\uff0c\u7528\u4f86\u589e\u52a0\u88ab\u52d5\u6536\u5165\u3002"
    },
    "decision": {
      "label": "\u6289\u64c7\u5361",
      "count": 36,
      "description": "A/B \u53d6\u6368\uff0c\u6c92\u6709\u6a19\u6e96\u7b54\u6848\uff0c\u8981\u770b\u7576\u4e0b\u72c0\u614b\u3002"
    },
    "special": {
      "label": "\u7279\u6b8a\u5361",
      "count": 2,
      "description": "\u4eba\u60c5\u5361\u8207\u501f\u8cb8\u5361\uff0c\u5206\u5225\u8655\u7406\u4e92\u52a9\u6551\u63f4\u8207\u501f\u6b3e\u7d00\u9304\u3002"
    }
  },
  "boardSpaces": [
    {
      "no": 0,
      "name": "START \u73fe\u91d1\u6d41\u65e5",
      "action": "\u7d50\u7b97\u73fe\u91d1\u6d41",
      "tip": "\u7d93\u904e\u6216\u505c\u5728\u90fd\u8981\u7d50\u7b97\u3002",
      "kind": "cash",
      "x": 1.4,
      "y": 1.1,
      "w": 11.8,
      "h": 14.8
    },
    {
      "no": 1,
      "name": "\u8cc7\u7522\u5e02\u5834",
      "action": "\u7ffb 1 \u5f35\u8cc7\u7522\u5361",
      "tip": "\u53ea\u6709\u505c\u5728\u8cc7\u7522\u5e02\u5834\u624d\u80fd\u8cb7\uff1b\u6bcf\u6b21\u6700\u591a\u8cb7 1 \u5f35\u3002",
      "kind": "asset",
      "x": 14.0,
      "y": 1.1,
      "w": 10.6,
      "h": 14.8
    },
    {
      "no": 2,
      "name": "\u4e8b\u4ef6\u5361",
      "action": "\u62bd 1 \u5f35\u4e8b\u4ef6\u5361",
      "tip": "\u62bd\u5361\u5f8c\u7167\u5361\u9762\u57f7\u884c\uff0c\u5099\u80ce\u964d\u5230 0 \u7acb\u523b\u7206\u80ce\u3002",
      "kind": "event",
      "x": 25.2,
      "y": 1.1,
      "w": 10.4,
      "h": 14.8
    },
    {
      "no": 3,
      "name": "\u5b78\u7fd2\u5145\u96fb",
      "action": "\u53ef\u652f\u4ed8 1,000\uff0c\u5de5\u4f5c\u5099\u80ce +1",
      "tip": "\u5de5\u4f5c\u5099\u80ce\u6eff 5 \u6642\u6539\u70ba\u52a0\u85aa\u6548\u679c\u3002",
      "kind": "growth",
      "x": 36.1,
      "y": 1.1,
      "w": 10.5,
      "h": 14.8
    },
    {
      "no": 4,
      "name": "\u6a5f\u6703\u5361",
      "action": "\u62bd 1 \u5f35\u6a5f\u6703\u5361",
      "tip": "\u82e5\u5361\u7247\u5beb\u300c\u53ef\u4ee5\u300d\u6216\u300c\u53ef\u652f\u4ed8\u300d\uff0c\u4ee3\u8868\u53ef\u4ee5\u62d2\u7d55\u3002",
      "kind": "opportunity",
      "x": 47.0,
      "y": 1.1,
      "w": 10.5,
      "h": 14.8
    },
    {
      "no": 5,
      "name": "\u8cc7\u7522\u5e02\u5834",
      "action": "\u7ffb 1 \u5f35\u8cc7\u7522\u5361",
      "tip": "\u53ea\u6709\u505c\u5728\u8cc7\u7522\u5e02\u5834\u624d\u80fd\u8cb7\uff1b\u6bcf\u6b21\u6700\u591a\u8cb7 1 \u5f35\u3002",
      "kind": "asset",
      "x": 57.9,
      "y": 1.1,
      "w": 10.5,
      "h": 14.8
    },
    {
      "no": 6,
      "name": "\u516c\u76ca\u65e5",
      "action": "\u53ef\u652f\u4ed8 2,000\uff0c\u8ca1\u52d9\u5099\u80ce +1",
      "tip": "\u9019\u4e9b\u683c\u5b50\u6703\u8b93\u8ca1\u52d9\u5099\u80ce\u66f4\u7a69\u3002",
      "kind": "finance",
      "x": 68.7,
      "y": 1.1,
      "w": 10.5,
      "h": 14.8
    },
    {
      "no": 7,
      "name": "\u5065\u5eb7\u65e5",
      "action": "\u53ef\u652f\u4ed8 2,000\uff0c\u5065\u5eb7\u5099\u80ce +1",
      "tip": "\u7167\u9867\u5065\u5eb7\u8207\u95dc\u4fc2\uff0c\u53ef\u4ee5\u964d\u4f4e\u4e8b\u4ef6\u885d\u64ca\u3002",
      "kind": "health",
      "x": 79.4,
      "y": 1.1,
      "w": 10.5,
      "h": 14.8
    },
    {
      "no": 8,
      "name": "\u73fe\u91d1\u6d41\u65e5",
      "action": "\u7d50\u7b97\u73fe\u91d1\u6d41",
      "tip": "\u7d93\u904e\u6216\u505c\u5728\u90fd\u8981\u7d50\u7b97\u3002",
      "kind": "cash",
      "x": 89.0,
      "y": 1.1,
      "w": 9.8,
      "h": 14.8
    },
    {
      "no": 9,
      "name": "\u8cc7\u7522\u5e02\u5834",
      "action": "\u7ffb 1 \u5f35\u8cc7\u7522\u5361",
      "tip": "\u53ea\u6709\u505c\u5728\u8cc7\u7522\u5e02\u5834\u624d\u80fd\u8cb7\uff1b\u6bcf\u6b21\u6700\u591a\u8cb7 1 \u5f35\u3002",
      "kind": "asset",
      "x": 88.1,
      "y": 16.4,
      "w": 10.6,
      "h": 13.1
    },
    {
      "no": 10,
      "name": "\u4e8b\u4ef6\u5361",
      "action": "\u62bd 1 \u5f35\u4e8b\u4ef6\u5361",
      "tip": "\u62bd\u5361\u5f8c\u7167\u5361\u9762\u57f7\u884c\uff0c\u5099\u80ce\u964d\u5230 0 \u7acb\u523b\u7206\u80ce\u3002",
      "kind": "event",
      "x": 88.1,
      "y": 30.3,
      "w": 10.6,
      "h": 13.1
    },
    {
      "no": 11,
      "name": "\u6289\u64c7\u5361",
      "action": "\u62bd 1 \u5f35\u6289\u64c7\u5361",
      "tip": "\u5fc5\u9808\u9078 A \u6216 B\uff0c\u770b\u7576\u4e0b\u72c0\u614b\u505a\u53d6\u6368\u3002",
      "kind": "decision",
      "x": 88.1,
      "y": 44.1,
      "w": 10.6,
      "h": 13.1
    },
    {
      "no": 12,
      "name": "\u8cc7\u7522\u5e02\u5834",
      "action": "\u7ffb 1 \u5f35\u8cc7\u7522\u5361",
      "tip": "\u53ea\u6709\u505c\u5728\u8cc7\u7522\u5e02\u5834\u624d\u80fd\u8cb7\uff1b\u6bcf\u6b21\u6700\u591a\u8cb7 1 \u5f35\u3002",
      "kind": "asset",
      "x": 88.1,
      "y": 58.0,
      "w": 10.6,
      "h": 13.1
    },
    {
      "no": 13,
      "name": "\u4e8b\u4ef6\u5361",
      "action": "\u62bd 1 \u5f35\u4e8b\u4ef6\u5361",
      "tip": "\u62bd\u5361\u5f8c\u7167\u5361\u9762\u57f7\u884c\uff0c\u5099\u80ce\u964d\u5230 0 \u7acb\u523b\u7206\u80ce\u3002",
      "kind": "event",
      "x": 88.1,
      "y": 71.9,
      "w": 10.6,
      "h": 13.1
    },
    {
      "no": 14,
      "name": "\u73fe\u91d1\u6d41\u65e5",
      "action": "\u7d50\u7b97\u73fe\u91d1\u6d41",
      "tip": "\u7d93\u904e\u6216\u505c\u5728\u90fd\u8981\u7d50\u7b97\u3002",
      "kind": "cash",
      "x": 89.0,
      "y": 85.1,
      "w": 9.8,
      "h": 13.8
    },
    {
      "no": 15,
      "name": "\u65c5\u904a\u653e\u9b06",
      "action": "\u53ef\u652f\u4ed8 5,000\uff0c\u5065\u5eb7\u5099\u80ce +1\u3001\u5bb6\u5ead\u5099\u80ce +1",
      "tip": "\u7167\u9867\u5065\u5eb7\u8207\u95dc\u4fc2\uff0c\u53ef\u4ee5\u964d\u4f4e\u4e8b\u4ef6\u885d\u64ca\u3002",
      "kind": "health",
      "x": 79.4,
      "y": 85.1,
      "w": 10.5,
      "h": 13.8
    },
    {
      "no": 16,
      "name": "\u6289\u64c7\u5361",
      "action": "\u62bd 1 \u5f35\u6289\u64c7\u5361",
      "tip": "\u5fc5\u9808\u9078 A \u6216 B\uff0c\u770b\u7576\u4e0b\u72c0\u614b\u505a\u53d6\u6368\u3002",
      "kind": "decision",
      "x": 68.7,
      "y": 85.1,
      "w": 10.5,
      "h": 13.8
    },
    {
      "no": 17,
      "name": "\u4e8b\u4ef6\u5361",
      "action": "\u62bd 1 \u5f35\u4e8b\u4ef6\u5361",
      "tip": "\u62bd\u5361\u5f8c\u7167\u5361\u9762\u57f7\u884c\uff0c\u5099\u80ce\u964d\u5230 0 \u7acb\u523b\u7206\u80ce\u3002",
      "kind": "event",
      "x": 57.9,
      "y": 85.1,
      "w": 10.5,
      "h": 13.8
    },
    {
      "no": 18,
      "name": "\u5bb6\u5ead\u6642\u5149",
      "action": "\u53ef\u652f\u4ed8 5,000\uff0c\u5bb6\u5ead\u5099\u80ce +1",
      "tip": "\u6295\u5165\u95dc\u4fc2\u6703\u63d0\u5347\u5bb6\u5ead\u5099\u80ce\u3002",
      "kind": "family",
      "x": 47.0,
      "y": 85.1,
      "w": 10.5,
      "h": 13.8
    },
    {
      "no": 19,
      "name": "\u6a5f\u6703\u5361",
      "action": "\u62bd 1 \u5f35\u6a5f\u6703\u5361",
      "tip": "\u82e5\u5361\u7247\u5beb\u300c\u53ef\u4ee5\u300d\u6216\u300c\u53ef\u652f\u4ed8\u300d\uff0c\u4ee3\u8868\u53ef\u4ee5\u62d2\u7d55\u3002",
      "kind": "opportunity",
      "x": 36.1,
      "y": 85.1,
      "w": 10.5,
      "h": 13.8
    },
    {
      "no": 20,
      "name": "\u4e8b\u4ef6\u5361",
      "action": "\u62bd 1 \u5f35\u4e8b\u4ef6\u5361",
      "tip": "\u62bd\u5361\u5f8c\u7167\u5361\u9762\u57f7\u884c\uff0c\u5099\u80ce\u964d\u5230 0 \u7acb\u523b\u7206\u80ce\u3002",
      "kind": "event",
      "x": 25.2,
      "y": 85.1,
      "w": 10.4,
      "h": 13.8
    },
    {
      "no": 21,
      "name": "\u8cc7\u7522\u5e02\u5834",
      "action": "\u7ffb 1 \u5f35\u8cc7\u7522\u5361",
      "tip": "\u53ea\u6709\u505c\u5728\u8cc7\u7522\u5e02\u5834\u624d\u80fd\u8cb7\uff1b\u6bcf\u6b21\u6700\u591a\u8cb7 1 \u5f35\u3002",
      "kind": "asset",
      "x": 14.0,
      "y": 85.1,
      "w": 10.6,
      "h": 13.8
    },
    {
      "no": 22,
      "name": "\u73fe\u91d1\u6d41\u65e5",
      "action": "\u7d50\u7b97\u73fe\u91d1\u6d41",
      "tip": "\u7d93\u904e\u6216\u505c\u5728\u90fd\u8981\u7d50\u7b97\u3002",
      "kind": "cash",
      "x": 1.4,
      "y": 85.1,
      "w": 11.8,
      "h": 13.8
    },
    {
      "no": 23,
      "name": "\u6a5f\u6703\u5361",
      "action": "\u62bd 1 \u5f35\u6a5f\u6703\u5361",
      "tip": "\u82e5\u5361\u7247\u5beb\u300c\u53ef\u4ee5\u300d\u6216\u300c\u53ef\u652f\u4ed8\u300d\uff0c\u4ee3\u8868\u53ef\u4ee5\u62d2\u7d55\u3002",
      "kind": "opportunity",
      "x": 1.4,
      "y": 71.9,
      "w": 11.8,
      "h": 13.1
    },
    {
      "no": 24,
      "name": "\u5132\u84c4\u5b58\u6b3e",
      "action": "\u53ef\u5b58 3,000\uff0c\u8ca1\u52d9\u5099\u80ce +1\uff1b\u6216\u5b58 5,000\uff0c\u8ca1\u52d9\u5099\u80ce +2",
      "tip": "\u9019\u4e9b\u683c\u5b50\u6703\u8b93\u8ca1\u52d9\u5099\u80ce\u66f4\u7a69\u3002",
      "kind": "finance",
      "x": 1.4,
      "y": 58.0,
      "w": 11.8,
      "h": 13.1
    },
    {
      "no": 25,
      "name": "\u516c\u53f8\u8cc7\u9063",
      "action": "\u5de5\u4f5c\u5099\u80ce -1\uff0c\u63a5\u4e0b\u4f86 2 \u6b21\u73fe\u91d1\u6d41\u65e5\u7121\u6cd5\u9818\u85aa\u6c34",
      "tip": "\u9019\u662f\u56fa\u5b9a\u5730\u5716\u4e8b\u4ef6\uff0c\u8981\u8a18\u9304\u7121\u85aa\u6c34\u6b21\u6578\u3002",
      "kind": "danger",
      "x": 1.4,
      "y": 44.1,
      "w": 11.8,
      "h": 13.1
    },
    {
      "no": 26,
      "name": "\u8cc7\u7522\u5e02\u5834",
      "action": "\u7ffb 1 \u5f35\u8cc7\u7522\u5361",
      "tip": "\u53ea\u6709\u505c\u5728\u8cc7\u7522\u5e02\u5834\u624d\u80fd\u8cb7\uff1b\u6bcf\u6b21\u6700\u591a\u8cb7 1 \u5f35\u3002",
      "kind": "asset",
      "x": 1.4,
      "y": 30.3,
      "w": 11.8,
      "h": 13.1
    },
    {
      "no": 27,
      "name": "\u4e8b\u4ef6\u5361",
      "action": "\u62bd 1 \u5f35\u4e8b\u4ef6\u5361",
      "tip": "\u62bd\u5361\u5f8c\u7167\u5361\u9762\u57f7\u884c\uff0c\u5099\u80ce\u964d\u5230 0 \u7acb\u523b\u7206\u80ce\u3002",
      "kind": "event",
      "x": 1.4,
      "y": 16.4,
      "w": 11.8,
      "h": 13.1
    }
  ],
  "cards": [
    {
      "deck": "event",
      "number": 1,
      "title": "\u610f\u5916\u5c0f\u734e\u91d1",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u73fe\u91d1 +2,000",
      "details": [
        "\u73fe\u91d1 +2,000"
      ],
      "tags": [
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/event/01.webp"
    },
    {
      "deck": "event",
      "number": 2,
      "title": "\u627e\u5230\u6298\u50f9\u5238",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u73fe\u91d1 +1,000",
      "details": [
        "\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/event/02.webp"
    },
    {
      "deck": "event",
      "number": 3,
      "title": "\u5bb6\u4eba\u904e\u5e74\u9001\u4fdd\u5065\u54c1",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5bb6\u5ead\u5099\u80ce +1\uff0c\u5065\u5eb7\u5099\u80ce +1",
      "details": [
        "\u5bb6\u5ead\u5099\u80ce +1\uff0c\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/event/03.webp"
    },
    {
      "deck": "event",
      "number": 4,
      "title": "\u5de5\u4f5c\u8868\u73fe\u88ab\u770b\u898b",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5de5\u4f5c\u5099\u80ce +1\uff1b\u82e5\u5de5\u4f5c\u5099\u80ce\u6703\u8d85\u904e 5\uff0c\u85aa\u6c34 +500",
      "details": [
        "\u5de5\u4f5c\u5099\u80ce +1\uff1b\u82e5\u5de5\u4f5c\u5099\u80ce\u6703\u8d85\u904e 5\uff0c\u85aa\u6c34 +500"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u85aa\u6c34"
      ],
      "image": "assets/cards/event/04.webp"
    },
    {
      "deck": "event",
      "number": 5,
      "title": "\u5c0f\u611f\u5192",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5065\u5eb7\u5099\u80ce -1\uff0c\u652f\u4ed8 1,000\uff1b\u5065\u5eb7\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u5065\u5eb7\u5099\u80ce -1",
      "details": [
        "\u5065\u5eb7\u5099\u80ce -1\uff0c\u652f\u4ed8 1,000\uff1b\u5065\u5eb7\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u5065\u5eb7\u5099\u80ce -1"
      ],
      "tags": [
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/event/05.webp"
    },
    {
      "deck": "event",
      "number": 6,
      "title": "\u624b\u6a5f\u7dad\u4fee",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u652f\u4ed8 1,500\uff1b\u8ca1\u52d9\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u8ca1\u52d9\u5099\u80ce -1",
      "details": [
        "\u652f\u4ed8 1,500\uff1b\u8ca1\u52d9\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u8ca1\u52d9\u5099\u80ce -1"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/event/06.webp"
    },
    {
      "deck": "event",
      "number": 7,
      "title": "\u4ea4\u901a\u7f70\u55ae",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u652f\u4ed8 1,500",
      "details": [
        "\u652f\u4ed8 1,500"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/event/07.webp"
    },
    {
      "deck": "event",
      "number": 8,
      "title": "\u5bb6\u5ead\u5c0f\u652f\u51fa",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u652f\u4ed8 1,500\uff1b\u5bb6\u5ead\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u5bb6\u5ead\u5099\u80ce -1",
      "details": [
        "\u652f\u4ed8 1,500\uff1b\u5bb6\u5ead\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u5bb6\u5ead\u5099\u80ce -1"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/event/08.webp"
    },
    {
      "deck": "event",
      "number": 9,
      "title": "\u670b\u53cb\u4f86\u8a2a",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u793e\u4ea4\u652f\u51fa 1,000",
      "details": [
        "\u793e\u4ea4\u652f\u51fa 1,000"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/event/09.webp"
    },
    {
      "deck": "event",
      "number": 10,
      "title": "\u7a05\u52d9\u6574\u7406",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u652f\u4ed8 1,000\uff0c\u8ca1\u52d9\u5099\u80ce +1",
      "details": [
        "\u652f\u4ed8 1,000\uff0c\u8ca1\u52d9\u5099\u80ce +1"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/event/10.webp"
    },
    {
      "deck": "event",
      "number": 11,
      "title": "\u88ab\u670b\u53cb\u63a8\u85a6",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u62bd 1 \u5f35\u6a5f\u6703\u5361",
      "details": [
        "\u62bd 1 \u5f35\u6a5f\u6703\u5361"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/event/11.webp"
    },
    {
      "deck": "event",
      "number": 12,
      "title": "\u5065\u5eb7\u610f\u8b58\u62ac\u982d",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5065\u5eb7\u5099\u80ce +1",
      "details": [
        "\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/event/12.webp"
    },
    {
      "deck": "event",
      "number": 13,
      "title": "\u8eca\u5b50\u7dad\u4fee",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u652f\u4ed8 3,000\uff1b\u8ca1\u52d9\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u8ca1\u52d9\u5099\u80ce -1",
      "details": [
        "\u652f\u4ed8 3,000\uff1b\u8ca1\u52d9\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u8ca1\u52d9\u5099\u80ce -1"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/event/13.webp"
    },
    {
      "deck": "event",
      "number": 14,
      "title": "\u7259\u9f52\u6cbb\u7642",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5065\u5eb7\u5099\u80ce -1\uff0c\u652f\u4ed8 2,000\uff1b\u5065\u5eb7\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u5065\u5eb7\u5099\u80ce -1",
      "details": [
        "\u5065\u5eb7\u5099\u80ce -1\uff0c\u652f\u4ed8 2,000\uff1b\u5065\u5eb7\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u5065\u5eb7\u5099\u80ce -1"
      ],
      "tags": [
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/event/14.webp"
    },
    {
      "deck": "event",
      "number": 15,
      "title": "\u516c\u53f8\u5c08\u6848\u52a0\u73ed",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5065\u5eb7\u5099\u80ce -1\uff0c\u5de5\u4f5c\u5099\u80ce +1",
      "details": [
        "\u5065\u5eb7\u5099\u80ce -1\uff0c\u5de5\u4f5c\u5099\u80ce +1"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/event/15.webp"
    },
    {
      "deck": "event",
      "number": 16,
      "title": "\u81e8\u6642\u5bb6\u5ead\u652f\u51fa",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5bb6\u5ead\u5099\u80ce -1\uff0c\u652f\u4ed8 2,500\uff1b\u5bb6\u5ead\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u5bb6\u5ead\u5099\u80ce -1",
      "details": [
        "\u5bb6\u5ead\u5099\u80ce -1\uff0c\u652f\u4ed8 2,500\uff1b\u5bb6\u5ead\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u5bb6\u5ead\u5099\u80ce -1"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/event/16.webp"
    },
    {
      "deck": "event",
      "number": 17,
      "title": "\u5fd8\u8a18\u7e73\u8cbb",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u8ca1\u52d9\u5099\u80ce -1\uff0c\u652f\u4ed8 1,500",
      "details": [
        "\u8ca1\u52d9\u5099\u80ce -1\uff0c\u652f\u4ed8 1,500"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/event/17.webp"
    },
    {
      "deck": "event",
      "number": 18,
      "title": "\u5de5\u4f5c\u5371\u6a5f",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5de5\u4f5c\u5099\u80ce -1",
      "details": [
        "\u5de5\u4f5c\u5099\u80ce -1"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/event/18.webp"
    },
    {
      "deck": "event",
      "number": 19,
      "title": "\u8cc7\u7522\u5c0f\u7dad\u4fee",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5982\u679c\u6709\u4efb\u4f55\u8cc7\u7522\uff0c\u652f\u4ed8 1,500\uff1b\u6c92\u6709\u8cc7\u7522\u5247\u7121\u4e8b\u767c\u751f\uff1b\u8ca1\u52d9\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u8ca1\u52d9\u5099\u80ce -1",
      "details": [
        "\u5982\u679c\u6709\u4efb\u4f55\u8cc7\u7522\uff0c\u652f\u4ed8 1,500\uff1b\u6c92\u6709\u8cc7\u7522\u5247\u7121\u4e8b\u767c\u751f\uff1b\u8ca1\u52d9\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u8ca1\u52d9\u5099\u80ce -1"
      ],
      "tags": [
        "\u8ca1\u52d9",
        "\u8cc7\u7522"
      ],
      "image": "assets/cards/event/19.webp"
    },
    {
      "deck": "event",
      "number": 20,
      "title": "\u8a2d\u5099\u7dad\u4fee",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5982\u679c\u6709\u4efb\u4f55\u8cc7\u7522\uff0c\u652f\u4ed8 2,000\uff1b\u6c92\u6709\u8cc7\u7522\u5247\u7121\u4e8b\u767c\u751f\uff1b\u8ca1\u52d9\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u8ca1\u52d9\u5099\u80ce -1",
      "details": [
        "\u5982\u679c\u6709\u4efb\u4f55\u8cc7\u7522\uff0c\u652f\u4ed8 2,000\uff1b\u6c92\u6709\u8cc7\u7522\u5247\u7121\u4e8b\u767c\u751f\uff1b\u8ca1\u52d9\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u53ef\u5c11\u4ed8 1,000 \u4e26\u8ca1\u52d9\u5099\u80ce -1"
      ],
      "tags": [
        "\u8ca1\u52d9",
        "\u8cc7\u7522"
      ],
      "image": "assets/cards/event/20.webp"
    },
    {
      "deck": "event",
      "number": 21,
      "title": "\u7269\u50f9\u4e0a\u6f32",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u56fa\u5b9a\u652f\u51fa +300\uff1b\u8ca1\u52d9\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u4e0d\u7528\u589e\u52a0\u56fa\u5b9a\u652f\u51fa",
      "details": [
        "\u56fa\u5b9a\u652f\u51fa +300\uff1b\u8ca1\u52d9\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u4e0d\u7528\u589e\u52a0\u56fa\u5b9a\u652f\u51fa"
      ],
      "tags": [
        "\u8ca1\u52d9",
        "\u56fa\u5b9a\u652f\u51fa"
      ],
      "image": "assets/cards/event/21.webp"
    },
    {
      "deck": "event",
      "number": 22,
      "title": "\u904e\u52de\u8b66\u8a0a",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5065\u5eb7\u5099\u80ce -2",
      "details": [
        "\u5065\u5eb7\u5099\u80ce -2"
      ],
      "tags": [
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/event/22.webp"
    },
    {
      "deck": "event",
      "number": 23,
      "title": "\u5bb6\u5ead\u51b7\u6230",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5bb6\u5ead\u5099\u80ce -2",
      "details": [
        "\u5bb6\u5ead\u5099\u80ce -2"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/event/23.webp"
    },
    {
      "deck": "event",
      "number": 24,
      "title": "\u8077\u6daf\u9707\u76ea",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5de5\u4f5c\u5099\u80ce -2",
      "details": [
        "\u5de5\u4f5c\u5099\u80ce -2"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/event/24.webp"
    },
    {
      "deck": "event",
      "number": 25,
      "title": "\u7dca\u6025\u652f\u51fa",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u8ca1\u52d9\u5099\u80ce -1\uff0c\u652f\u4ed8 3,000",
      "details": [
        "\u8ca1\u52d9\u5099\u80ce -1\uff0c\u652f\u4ed8 3,000"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/event/25.webp"
    },
    {
      "deck": "event",
      "number": 26,
      "title": "\u73fe\u91d1\u6d41\u58d3\u529b",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u8ca1\u52d9\u5099\u80ce -1",
      "details": [
        "\u8ca1\u52d9\u5099\u80ce -1"
      ],
      "tags": [
        "\u8ca1\u52d9",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/event/26.webp"
    },
    {
      "deck": "event",
      "number": 27,
      "title": "\u591a\u91cd\u58d3\u529b\u9031",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u627e\u51fa\u76ee\u524d\u6700\u4f4e\u7684\u5099\u80ce\uff0c\u8a72\u5099\u80ce -2\uff1b\u82e5\u6709\u591a\u500b\u6700\u4f4e\uff0c\u7531\u73a9\u5bb6\u81ea\u5df1\u9078\u4e00\u500b",
      "details": [
        "\u627e\u51fa\u76ee\u524d\u6700\u4f4e\u7684\u5099\u80ce\uff0c\u8a72\u5099\u80ce -2\uff1b\u82e5\u6709\u591a\u500b\u6700\u4f4e\uff0c\u7531\u73a9\u5bb6\u81ea\u5df1\u9078\u4e00\u500b"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/event/27.webp"
    },
    {
      "deck": "event",
      "number": 28,
      "title": "\u71ac\u591c\u5931\u7720",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5065\u5eb7\u5099\u80ce -2",
      "details": [
        "\u5065\u5eb7\u5099\u80ce -2"
      ],
      "tags": [
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/event/28.webp"
    },
    {
      "deck": "event",
      "number": 29,
      "title": "\u89aa\u60c5\u6469\u64e6",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5bb6\u5ead\u5099\u80ce -2",
      "details": [
        "\u5bb6\u5ead\u5099\u80ce -2"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/event/29.webp"
    },
    {
      "deck": "event",
      "number": 30,
      "title": "\u81e8\u6642\u52a0\u73ed",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5065\u5eb7\u5099\u80ce -1\uff0c\u5de5\u4f5c\u5099\u80ce +1",
      "details": [
        "\u5065\u5eb7\u5099\u80ce -1\uff0c\u5de5\u4f5c\u5099\u80ce +1"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/event/30.webp"
    },
    {
      "deck": "event",
      "number": 31,
      "title": "\u9810\u7b97\u5931\u63a7",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u8ca1\u52d9\u5099\u80ce -1",
      "details": [
        "\u8ca1\u52d9\u5099\u80ce -1"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/event/31.webp"
    },
    {
      "deck": "event",
      "number": 32,
      "title": "\u91ab\u7642\u6025\u7528",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u8ca1\u52d9\u5099\u80ce -1\uff0c\u652f\u4ed8 3,000",
      "details": [
        "\u8ca1\u52d9\u5099\u80ce -1\uff0c\u652f\u4ed8 3,000"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/event/32.webp"
    },
    {
      "deck": "event",
      "number": 33,
      "title": "\u5ba2\u6236\u6d41\u5931",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5de5\u4f5c\u5099\u80ce -1",
      "details": [
        "\u5de5\u4f5c\u5099\u80ce -1"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/event/33.webp"
    },
    {
      "deck": "event",
      "number": 34,
      "title": "\u81e8\u6642\u7f70\u6b3e",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u652f\u4ed8 1,500",
      "details": [
        "\u652f\u4ed8 1,500"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/event/34.webp"
    },
    {
      "deck": "event",
      "number": 35,
      "title": "\u5e33\u55ae\u903e\u671f",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u8ca1\u52d9\u5099\u80ce -1\uff0c\u652f\u4ed8 1,500",
      "details": [
        "\u8ca1\u52d9\u5099\u80ce -1\uff0c\u652f\u4ed8 1,500"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/event/35.webp"
    },
    {
      "deck": "event",
      "number": 36,
      "title": "\u8cb4\u4eba\u727d\u7dda",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u62bd 1 \u5f35\u6a5f\u6703\u5361",
      "details": [
        "\u62bd 1 \u5f35\u6a5f\u6703\u5361"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/event/36.webp"
    },
    {
      "deck": "event",
      "number": 37,
      "title": "\u5de5\u4f5c\u8f49\u6298",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5de5\u4f5c\u5099\u80ce -2",
      "details": [
        "\u5de5\u4f5c\u5099\u80ce -2"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/event/37.webp"
    },
    {
      "deck": "event",
      "number": 38,
      "title": "\u793e\u4ea4\u805a\u6703",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u793e\u4ea4\u652f\u51fa 1,000",
      "details": [
        "\u793e\u4ea4\u652f\u51fa 1,000"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/event/38.webp"
    },
    {
      "deck": "event",
      "number": 39,
      "title": "\u7269\u50f9\u6ce2\u52d5",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u56fa\u5b9a\u652f\u51fa +300\uff1b\u8ca1\u52d9\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u4e0d\u7528\u589e\u52a0",
      "details": [
        "\u56fa\u5b9a\u652f\u51fa +300\uff1b\u8ca1\u52d9\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u4e0d\u7528\u589e\u52a0"
      ],
      "tags": [
        "\u8ca1\u52d9",
        "\u56fa\u5b9a\u652f\u51fa"
      ],
      "image": "assets/cards/event/39.webp"
    },
    {
      "deck": "event",
      "number": 40,
      "title": "\u5168\u9762\u58d3\u529b",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u627e\u51fa\u76ee\u524d\u6700\u4f4e\u7684\u5099\u80ce\uff0c\u8a72\u5099\u80ce -2\uff1b\u82e5\u6709\u591a\u500b\u6700\u4f4e\uff0c\u7531\u73a9\u5bb6\u81ea\u5df1\u9078\u4e00\u500b",
      "details": [
        "\u627e\u51fa\u76ee\u524d\u6700\u4f4e\u7684\u5099\u80ce\uff0c\u8a72\u5099\u80ce -2\uff1b\u82e5\u6709\u591a\u500b\u6700\u4f4e\uff0c\u7531\u73a9\u5bb6\u81ea\u5df1\u9078\u4e00\u500b"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/event/40.webp"
    },
    {
      "deck": "event",
      "number": 41,
      "title": "\u7701\u9322\u5999\u62db",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u73fe\u91d1 +1,000",
      "details": [
        "\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/event/41.webp"
    },
    {
      "deck": "event",
      "number": 42,
      "title": "\u5831\u7a05\u5c0f\u63d2\u66f2",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u652f\u4ed8 1,000\uff0c\u8ca1\u52d9\u5099\u80ce +1",
      "details": [
        "\u652f\u4ed8 1,000\uff0c\u8ca1\u52d9\u5099\u80ce +1"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/event/42.webp"
    },
    {
      "deck": "event",
      "number": 43,
      "title": "\u5065\u5eb7\u65b0\u7fd2\u6163",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5065\u5eb7\u5099\u80ce +1",
      "details": [
        "\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/event/43.webp"
    },
    {
      "deck": "event",
      "number": 44,
      "title": "\u5bb6\u4eba\u652f\u6301",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5bb6\u5ead\u5099\u80ce +1\uff0c\u5065\u5eb7\u5099\u80ce +1",
      "details": [
        "\u5bb6\u5ead\u5099\u80ce +1\uff0c\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/event/44.webp"
    },
    {
      "deck": "event",
      "number": 45,
      "title": "\u52aa\u529b\u88ab\u770b\u898b",
      "subtitle": "\u4e8b\u4ef6\u5361",
      "summary": "\u5de5\u4f5c\u5099\u80ce +1\uff1b\u82e5\u5de5\u4f5c\u5099\u80ce\u6703\u8d85\u904e 5\uff0c\u85aa\u6c34 +500",
      "details": [
        "\u5de5\u4f5c\u5099\u80ce +1\uff1b\u82e5\u5de5\u4f5c\u5099\u80ce\u6703\u8d85\u904e 5\uff0c\u85aa\u6c34 +500"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u85aa\u6c34"
      ],
      "image": "assets/cards/event/45.webp"
    },
    {
      "deck": "opportunity",
      "number": 1,
      "title": "\u514d\u8cbb\u8b1b\u5ea7",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5de5\u4f5c\u5099\u80ce +1",
      "details": [
        "\u5de5\u4f5c\u5099\u80ce +1"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/opportunity/01.webp"
    },
    {
      "deck": "opportunity",
      "number": 2,
      "title": "\u5c0f\u578b\u8cc7\u7522\u63a8\u85a6",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u7acb\u523b\u7ffb 1 \u5f35\u8cc7\u7522\u5361\uff0c\u53ef\u4f9d\u8cc7\u7522\u5e02\u5834\u898f\u5247\u8cfc\u8cb7",
      "details": [
        "\u7acb\u523b\u7ffb 1 \u5f35\u8cc7\u7522\u5361\uff0c\u53ef\u4f9d\u8cc7\u7522\u5e02\u5834\u898f\u5247\u8cfc\u8cb7"
      ],
      "tags": [
        "\u8cc7\u7522"
      ],
      "image": "assets/cards/opportunity/02.webp"
    },
    {
      "deck": "opportunity",
      "number": 3,
      "title": "\u52a0\u85aa\u6a5f\u6703",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 4 \u9ede\u4ee5\u4e0a\u6642\uff0c\u85aa\u6c34 +1,000",
      "details": [
        "\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 4 \u9ede\u4ee5\u4e0a\u6642\uff0c\u85aa\u6c34 +1,000"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u85aa\u6c34"
      ],
      "image": "assets/cards/opportunity/03.webp"
    },
    {
      "deck": "opportunity",
      "number": 4,
      "title": "\u8cc7\u7522\u8cfc\u8cb7\u512a\u60e0\u5238",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u4fdd\u7559\u6b64\u5361\uff1b\u4e0b\u6b21\u8cfc\u8cb7\u8cc7\u7522\u6642\u6210\u672c -2,000",
      "details": [
        "\u4fdd\u7559\u6b64\u5361\uff1b\u4e0b\u6b21\u8cfc\u8cb7\u8cc7\u7522\u6642\u6210\u672c -2,000"
      ],
      "tags": [
        "\u8cc7\u7522",
        "\u4fdd\u7559"
      ],
      "image": "assets/cards/opportunity/04.webp"
    },
    {
      "deck": "opportunity",
      "number": 5,
      "title": "\u5275\u696d\u9080\u8acb",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u53ef\u4ee5\u652f\u4ed8 3,000 \u5275\u696d\uff0c\u88ab\u52d5\u6536\u5165 +600",
      "details": [
        "\u53ef\u4ee5\u652f\u4ed8 3,000 \u5275\u696d\uff0c\u88ab\u52d5\u6536\u5165 +600"
      ],
      "tags": [
        "\u88ab\u52d5\u6536\u5165"
      ],
      "image": "assets/cards/opportunity/05.webp"
    },
    {
      "deck": "opportunity",
      "number": 6,
      "title": "\u5065\u5eb7\u7ba1\u7406\u8a08\u756b\u6210\u529f",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u53ef\u652f\u4ed8 5,000 \u53c3\u52a0\u5065\u5eb7\u7ba1\u7406\u8a08\u756b\uff0c\u5065\u5eb7\u5099\u80ce +1",
      "details": [
        "\u53ef\u652f\u4ed8 5,000 \u53c3\u52a0\u5065\u5eb7\u7ba1\u7406\u8a08\u756b\uff0c\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/opportunity/06.webp"
    },
    {
      "deck": "opportunity",
      "number": 7,
      "title": "\u820a\u7269\u51fa\u552e",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u73fe\u91d1 +2,000",
      "details": [
        "\u73fe\u91d1 +2,000"
      ],
      "tags": [
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/opportunity/07.webp"
    },
    {
      "deck": "opportunity",
      "number": 8,
      "title": "\u4eba\u8108\u805a\u6703",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u652f\u4ed8 1,000\uff0c\u5de5\u4f5c\u5099\u80ce +1",
      "details": [
        "\u652f\u4ed8 1,000\uff0c\u5de5\u4f5c\u5099\u80ce +1"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/opportunity/08.webp"
    },
    {
      "deck": "opportunity",
      "number": 9,
      "title": "\u7121\u9650\u671f\u4fdd\u96aa\u55ae",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u53ef\u8cfc\u8cb7\u4fdd\u96aa\uff1b\u82e5\u8cfc\u8cb7\uff0c\u56fa\u5b9a\u652f\u51fa +500\uff1b\u4e4b\u5f8c\u6bcf\u6b21\u4e8b\u4ef6\u91d1\u9322\u640d\u5931\u5c11\u4ed8 1,000",
      "details": [
        "\u53ef\u8cfc\u8cb7\u4fdd\u96aa\uff1b\u82e5\u8cfc\u8cb7\uff0c\u56fa\u5b9a\u652f\u51fa +500\uff1b\u4e4b\u5f8c\u6bcf\u6b21\u4e8b\u4ef6\u91d1\u9322\u640d\u5931\u5c11\u4ed8 1,000"
      ],
      "tags": [
        "\u56fa\u5b9a\u652f\u51fa",
        "\u4fdd\u96aa"
      ],
      "image": "assets/cards/opportunity/09.webp"
    },
    {
      "deck": "opportunity",
      "number": 10,
      "title": "\u8cb4\u4eba\u6c42\u6551\u5361",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u4fdd\u7559\u6b64\u5361\uff1b\u4e4b\u5f8c\u62bd\u5230\u4e8b\u4ef6\u5361\u6642\uff0c\u53ef\u4ee5\u4e1f\u68c4\u6b64\u5361\uff0c\u53d6\u6d88\u8a72\u4e8b\u4ef6\u4e00\u534a\u91d1\u9322\u640d\u5931",
      "details": [
        "\u4fdd\u7559\u6b64\u5361\uff1b\u4e4b\u5f8c\u62bd\u5230\u4e8b\u4ef6\u5361\u6642\uff0c\u53ef\u4ee5\u4e1f\u68c4\u6b64\u5361\uff0c\u53d6\u6d88\u8a72\u4e8b\u4ef6\u4e00\u534a\u91d1\u9322\u640d\u5931"
      ],
      "tags": [
        "\u4fdd\u7559"
      ],
      "image": "assets/cards/opportunity/10.webp"
    },
    {
      "deck": "opportunity",
      "number": 11,
      "title": "\u526f\u696d\u7206\u55ae",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5982\u679c\u6709\u4efb\u4f55\u8cc7\u7522\uff0c\u73fe\u91d1 +4,000\uff1b\u5982\u679c\u6c92\u6709\u8cc7\u7522\uff0c\u73fe\u91d1 +1,000",
      "details": [
        "\u5982\u679c\u6709\u4efb\u4f55\u8cc7\u7522\uff0c\u73fe\u91d1 +4,000\uff1b\u5982\u679c\u6c92\u6709\u8cc7\u7522\uff0c\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u73fe\u91d1",
        "\u8cc7\u7522"
      ],
      "image": "assets/cards/opportunity/11.webp"
    },
    {
      "deck": "opportunity",
      "number": 12,
      "title": "\u7406\u8ca1\u6574\u7406",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5982\u679c\u6709\u8ca0\u50b5\uff0c\u53ef\u4ee5\u652f\u4ed8 8,000\uff0c\u511f\u9084 10,000 \u50b5\u52d9\uff1b\u4e0d\u53ef\u7d2f\u8a08",
      "details": [
        "\u5982\u679c\u6709\u8ca0\u50b5\uff0c\u53ef\u4ee5\u652f\u4ed8 8,000\uff0c\u511f\u9084 10,000 \u50b5\u52d9\uff1b\u4e0d\u53ef\u7d2f\u8a08"
      ],
      "tags": [
        "\u8ca0\u50b5"
      ],
      "image": "assets/cards/opportunity/12.webp"
    },
    {
      "deck": "opportunity",
      "number": 13,
      "title": "\u8a8d\u8b58\u71df\u990a\u5e2b\u597d\u670b\u53cb",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5065\u5eb7\u5099\u80ce +1",
      "details": [
        "\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/opportunity/13.webp"
    },
    {
      "deck": "opportunity",
      "number": 14,
      "title": "\u5927\u7d05\u5305",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u73fe\u91d1 +3,000",
      "details": [
        "\u73fe\u91d1 +3,000"
      ],
      "tags": [
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/opportunity/14.webp"
    },
    {
      "deck": "opportunity",
      "number": 15,
      "title": "\u627e\u5230\u597d\u623f\u5ba2",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5982\u679c\u6709\u51fa\u79df\u578b\u8cc7\u7522\uff0c\u88ab\u52d5\u6536\u5165 +500\uff1b\u5982\u679c\u6c92\u6709\u51fa\u79df\u578b\u8cc7\u7522\uff0c\u73fe\u91d1 +1,000",
      "details": [
        "\u5982\u679c\u6709\u51fa\u79df\u578b\u8cc7\u7522\uff0c\u88ab\u52d5\u6536\u5165 +500\uff1b\u5982\u679c\u6c92\u6709\u51fa\u79df\u578b\u8cc7\u7522\uff0c\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u73fe\u91d1",
        "\u88ab\u52d5\u6536\u5165",
        "\u8cc7\u7522"
      ],
      "image": "assets/cards/opportunity/15.webp"
    },
    {
      "deck": "opportunity",
      "number": 16,
      "title": "\u8a2d\u5099\u5347\u7d1a",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5982\u679c\u6709\u8a2d\u5099\u578b\u8cc7\u7522\uff0c\u53ef\u4ee5\u652f\u4ed8 5,000\uff1b\u88ab\u52d5\u6536\u5165 +1,000",
      "details": [
        "\u5982\u679c\u6709\u8a2d\u5099\u578b\u8cc7\u7522\uff0c\u53ef\u4ee5\u652f\u4ed8 5,000\uff1b\u88ab\u52d5\u6536\u5165 +1,000"
      ],
      "tags": [
        "\u88ab\u52d5\u6536\u5165",
        "\u8cc7\u7522"
      ],
      "image": "assets/cards/opportunity/16.webp"
    },
    {
      "deck": "opportunity",
      "number": 17,
      "title": "\u7372\u9080\u4e0a\u53f0\u6f14\u8b1b",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u73fe\u91d1 +2,000\uff0c\u5de5\u4f5c\u5099\u80ce +1",
      "details": [
        "\u73fe\u91d1 +2,000\uff0c\u5de5\u4f5c\u5099\u80ce +1"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/opportunity/17.webp"
    },
    {
      "deck": "opportunity",
      "number": 18,
      "title": "\u610f\u5916\u4e4b\u8ca1",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u73fe\u91d1 +1,000",
      "details": [
        "\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/opportunity/18.webp"
    },
    {
      "deck": "opportunity",
      "number": 19,
      "title": "\u89aa\u53cb\u8ca1\u529b\u652f\u63f4",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5982\u679c\u73fe\u91d1\u4f4e\u65bc 3,000\uff0c\u984d\u5916\u73fe\u91d1 +2,000",
      "details": [
        "\u5982\u679c\u73fe\u91d1\u4f4e\u65bc 3,000\uff0c\u984d\u5916\u73fe\u91d1 +2,000"
      ],
      "tags": [
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/opportunity/19.webp"
    },
    {
      "deck": "opportunity",
      "number": 20,
      "title": "\u7b2c\u4e00\u6876\u88ab\u52d5\u6536\u5165",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5982\u679c\u88ab\u52d5\u6536\u5165\u662f 0\uff0c\u53ef\u4ee5\u7acb\u523b\u7ffb 1 \u5f35\u8cc7\u7522\u5361\uff0c\u4ee5\u6210\u672c -2,000 \u8cfc\u8cb7",
      "details": [
        "\u5982\u679c\u88ab\u52d5\u6536\u5165\u662f 0\uff0c\u53ef\u4ee5\u7acb\u523b\u7ffb 1 \u5f35\u8cc7\u7522\u5361\uff0c\u4ee5\u6210\u672c -2,000 \u8cfc\u8cb7"
      ],
      "tags": [
        "\u88ab\u52d5\u6536\u5165",
        "\u8cc7\u7522"
      ],
      "image": "assets/cards/opportunity/20.webp"
    },
    {
      "deck": "opportunity",
      "number": 21,
      "title": "\u6280\u80fd\u7dda\u4e0a\u8ab2",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u652f\u4ed8 1,000\uff0c\u5de5\u4f5c\u5099\u80ce +1",
      "details": [
        "\u652f\u4ed8 1,000\uff0c\u5de5\u4f5c\u5099\u80ce +1"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/opportunity/21.webp"
    },
    {
      "deck": "opportunity",
      "number": 22,
      "title": "\u8cc7\u7522\u60c5\u5831",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u7acb\u523b\u7ffb 1 \u5f35\u8cc7\u7522\u5361\uff0c\u53ef\u8cfc\u8cb7\u8a72\u8cc7\u7522\u5361",
      "details": [
        "\u7acb\u523b\u7ffb 1 \u5f35\u8cc7\u7522\u5361\uff0c\u53ef\u8cfc\u8cb7\u8a72\u8cc7\u7522\u5361"
      ],
      "tags": [
        "\u8cc7\u7522"
      ],
      "image": "assets/cards/opportunity/22.webp"
    },
    {
      "deck": "opportunity",
      "number": 23,
      "title": "\u5c08\u6848\u734e\u91d1",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5de5\u4f5c\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u6642\uff0c\u73fe\u91d1 +2,000",
      "details": [
        "\u5de5\u4f5c\u5099\u80ce 4 \u9ede\u4ee5\u4e0a\u6642\uff0c\u73fe\u91d1 +2,000"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/opportunity/23.webp"
    },
    {
      "deck": "opportunity",
      "number": 24,
      "title": "\u8cc7\u7522\u6298\u6263\u5238",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u4fdd\u7559\u6b64\u5361\uff1b\u4e0b\u6b21\u8cfc\u8cb7\u8cc7\u7522\u6642\u6210\u672c -1,500",
      "details": [
        "\u4fdd\u7559\u6b64\u5361\uff1b\u4e0b\u6b21\u8cfc\u8cb7\u8cc7\u7522\u6642\u6210\u672c -1,500"
      ],
      "tags": [
        "\u8cc7\u7522",
        "\u4fdd\u7559"
      ],
      "image": "assets/cards/opportunity/24.webp"
    },
    {
      "deck": "opportunity",
      "number": 25,
      "title": "\u5c0f\u984d\u526f\u696d",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u53ef\u652f\u4ed8 2,000 \u958b\u59cb\u63a5\u6848\uff0c\u88ab\u52d5\u6536\u5165 +400",
      "details": [
        "\u53ef\u652f\u4ed8 2,000 \u958b\u59cb\u63a5\u6848\uff0c\u88ab\u52d5\u6536\u5165 +400"
      ],
      "tags": [
        "\u88ab\u52d5\u6536\u5165"
      ],
      "image": "assets/cards/opportunity/25.webp"
    },
    {
      "deck": "opportunity",
      "number": 26,
      "title": "\u5065\u8eab\u6311\u6230",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u53ef\u652f\u4ed8 3,000 \u53c3\u52a0\u904b\u52d5\u8a08\u756b\uff0c\u5065\u5eb7\u5099\u80ce +1",
      "details": [
        "\u53ef\u652f\u4ed8 3,000 \u53c3\u52a0\u904b\u52d5\u8a08\u756b\uff0c\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/opportunity/26.webp"
    },
    {
      "deck": "opportunity",
      "number": 27,
      "title": "\u4e8c\u624b\u8f49\u8ce3",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u73fe\u91d1 +1,500",
      "details": [
        "\u73fe\u91d1 +1,500"
      ],
      "tags": [
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/opportunity/27.webp"
    },
    {
      "deck": "opportunity",
      "number": 28,
      "title": "\u5c08\u5bb6\u805a\u9910",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u652f\u4ed8 1,500\uff0c\u5de5\u4f5c\u5099\u80ce +1",
      "details": [
        "\u652f\u4ed8 1,500\uff0c\u5de5\u4f5c\u5099\u80ce +1"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/opportunity/28.webp"
    },
    {
      "deck": "opportunity",
      "number": 29,
      "title": "\u4fdd\u96aa\u5347\u7d1a",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u53ef\u8cfc\u8cb7\u984d\u5916\u4fdd\u969c\uff1b\u82e5\u8cfc\u8cb7\uff0c\u56fa\u5b9a\u652f\u51fa +300\uff1b\u4e4b\u5f8c\u6bcf\u6b21\u4e8b\u4ef6\u91d1\u9322\u640d\u5931\u5c11\u4ed8 1000",
      "details": [
        "\u53ef\u8cfc\u8cb7\u984d\u5916\u4fdd\u969c\uff1b\u82e5\u8cfc\u8cb7\uff0c\u56fa\u5b9a\u652f\u51fa +300\uff1b\u4e4b\u5f8c\u6bcf\u6b21\u4e8b\u4ef6\u91d1\u9322\u640d\u5931\u5c11\u4ed8 1000"
      ],
      "tags": [
        "\u56fa\u5b9a\u652f\u51fa",
        "\u4fdd\u96aa"
      ],
      "image": "assets/cards/opportunity/29.webp"
    },
    {
      "deck": "opportunity",
      "number": 30,
      "title": "\u8cb4\u4eba\u63d0\u651c",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u4fdd\u7559\u6b64\u5361\uff1b\u62bd\u5230\u4e8b\u4ef6\u5361\u6642\u53ef\u4f7f\u7528\uff0c\u6e1b\u5c11 1,000 \u5143\u91d1\u9322\u640d\u5931",
      "details": [
        "\u4fdd\u7559\u6b64\u5361\uff1b\u62bd\u5230\u4e8b\u4ef6\u5361\u6642\u53ef\u4f7f\u7528\uff0c\u6e1b\u5c11 1,000 \u5143\u91d1\u9322\u640d\u5931"
      ],
      "tags": [
        "\u4fdd\u7559"
      ],
      "image": "assets/cards/opportunity/30.webp"
    },
    {
      "deck": "opportunity",
      "number": 31,
      "title": "\u5e02\u5834\u7d05\u5229",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5982\u679c\u6709\u4efb\u4f55\u8cc7\u7522\uff0c\u73fe\u91d1 +2,000\uff1b\u5982\u679c\u6c92\u6709\u8cc7\u7522\uff0c\u73fe\u91d1 +1,000",
      "details": [
        "\u5982\u679c\u6709\u4efb\u4f55\u8cc7\u7522\uff0c\u73fe\u91d1 +2,000\uff1b\u5982\u679c\u6c92\u6709\u8cc7\u7522\uff0c\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u73fe\u91d1",
        "\u8cc7\u7522"
      ],
      "image": "assets/cards/opportunity/31.webp"
    },
    {
      "deck": "opportunity",
      "number": 32,
      "title": "\u5e02\u5834\u7d05\u5229",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5982\u679c\u6709\u4efb\u4f55\u8cc7\u7522\uff0c\u73fe\u91d1 +2,000\uff1b\u5982\u679c\u6c92\u6709\u8cc7\u7522\uff0c\u73fe\u91d1 +1,000",
      "details": [
        "\u5982\u679c\u6709\u4efb\u4f55\u8cc7\u7522\uff0c\u73fe\u91d1 +2,000\uff1b\u5982\u679c\u6c92\u6709\u8cc7\u7522\uff0c\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u73fe\u91d1",
        "\u8cc7\u7522"
      ],
      "image": "assets/cards/opportunity/32.webp"
    },
    {
      "deck": "opportunity",
      "number": 33,
      "title": "\u50b5\u52d9\u5354\u5546",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5982\u679c\u6709\u8ca0\u50b5\uff0c\u53ef\u4ee5\u652f\u4ed8 9,000\uff0c\u511f\u9084 10,000 \u50b5\u52d9\uff1b\u4e0d\u53ef\u7d2f\u8a08",
      "details": [
        "\u5982\u679c\u6709\u8ca0\u50b5\uff0c\u53ef\u4ee5\u652f\u4ed8 9,000\uff0c\u511f\u9084 10,000 \u50b5\u52d9\uff1b\u4e0d\u53ef\u7d2f\u8a08"
      ],
      "tags": [
        "\u8ca0\u50b5"
      ],
      "image": "assets/cards/opportunity/33.webp"
    },
    {
      "deck": "opportunity",
      "number": 34,
      "title": "\u5065\u5eb7\u8aee\u8a62",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5065\u5eb7\u5099\u80ce +1",
      "details": [
        "\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/opportunity/34.webp"
    },
    {
      "deck": "opportunity",
      "number": 35,
      "title": "\u7bc0\u6176\u7d05\u5305",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u73fe\u91d1 +2,000",
      "details": [
        "\u73fe\u91d1 +2,000"
      ],
      "tags": [
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/opportunity/35.webp"
    },
    {
      "deck": "opportunity",
      "number": 36,
      "title": "\u8a2d\u5099\u4fdd\u990a",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5982\u679c\u6709\u8a2d\u5099\u578b\u8cc7\u7522\uff0c\u53ef\u4ee5\u652f\u4ed8 4,000\uff1b\u88ab\u52d5\u6536\u5165 +500",
      "details": [
        "\u5982\u679c\u6709\u8a2d\u5099\u578b\u8cc7\u7522\uff0c\u53ef\u4ee5\u652f\u4ed8 4,000\uff1b\u88ab\u52d5\u6536\u5165 +500"
      ],
      "tags": [
        "\u88ab\u52d5\u6536\u5165",
        "\u8cc7\u7522"
      ],
      "image": "assets/cards/opportunity/36.webp"
    },
    {
      "deck": "opportunity",
      "number": 37,
      "title": "\u5c08\u696d\u5206\u4eab",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u73fe\u91d1 +1,500\uff0c\u5de5\u4f5c\u5099\u80ce +1",
      "details": [
        "\u73fe\u91d1 +1,500\uff0c\u5de5\u4f5c\u5099\u80ce +1"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/opportunity/37.webp"
    },
    {
      "deck": "opportunity",
      "number": 38,
      "title": "\u5c0f\u78ba\u5e78",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u73fe\u91d1 +1,000",
      "details": [
        "\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/opportunity/38.webp"
    },
    {
      "deck": "opportunity",
      "number": 39,
      "title": "\u89aa\u53cb\u652f\u63f4",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5982\u679c\u73fe\u91d1\u4f4e\u65bc 3,000\uff0c\u984d\u5916\u73fe\u91d1 +1,500",
      "details": [
        "\u5982\u679c\u73fe\u91d1\u4f4e\u65bc 3,000\uff0c\u984d\u5916\u73fe\u91d1 +1,500"
      ],
      "tags": [
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/opportunity/39.webp"
    },
    {
      "deck": "opportunity",
      "number": 40,
      "title": "\u8cc7\u7522\u6298\u6263",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5982\u679c\u88ab\u52d5\u6536\u5165\u662f 0\uff0c\u53ef\u4ee5\u7acb\u523b\u7ffb 1 \u5f35\u8cc7\u7522\u5361\uff0c\u4ee5\u6210\u672c -1,500 \u8cfc\u8cb7",
      "details": [
        "\u5982\u679c\u88ab\u52d5\u6536\u5165\u662f 0\uff0c\u53ef\u4ee5\u7acb\u523b\u7ffb 1 \u5f35\u8cc7\u7522\u5361\uff0c\u4ee5\u6210\u672c -1,500 \u8cfc\u8cb7"
      ],
      "tags": [
        "\u88ab\u52d5\u6536\u5165",
        "\u8cc7\u7522"
      ],
      "image": "assets/cards/opportunity/40.webp"
    },
    {
      "deck": "opportunity",
      "number": 41,
      "title": "\u53e3\u7891\u63a8\u85a6",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5de5\u4f5c\u5099\u80ce +1\uff0c\u73fe\u91d1 +1,000",
      "details": [
        "\u5de5\u4f5c\u5099\u80ce +1\uff0c\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/opportunity/41.webp"
    },
    {
      "deck": "opportunity",
      "number": 42,
      "title": "\u5bb6\u5ead\u9f13\u52f5",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5bb6\u5ead\u5099\u80ce +1\uff0c\u5065\u5eb7\u5099\u80ce +1",
      "details": [
        "\u5bb6\u5ead\u5099\u80ce +1\uff0c\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/opportunity/42.webp"
    },
    {
      "deck": "opportunity",
      "number": 43,
      "title": "\u73fe\u91d1\u56de\u994b",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u73fe\u91d1 +1,200",
      "details": [
        "\u73fe\u91d1 +1,200"
      ],
      "tags": [
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/opportunity/43.webp"
    },
    {
      "deck": "opportunity",
      "number": 44,
      "title": "\u793e\u7fa4\u66dd\u5149",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u5de5\u4f5c\u5099\u80ce +1\uff1b\u82e5\u5de5\u4f5c\u5099\u80ce\u6703\u8d85\u904e 5\uff0c\u85aa\u6c34 +500",
      "details": [
        "\u5de5\u4f5c\u5099\u80ce +1\uff1b\u82e5\u5de5\u4f5c\u5099\u80ce\u6703\u8d85\u904e 5\uff0c\u85aa\u6c34 +500"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u85aa\u6c34"
      ],
      "image": "assets/cards/opportunity/44.webp"
    },
    {
      "deck": "opportunity",
      "number": 45,
      "title": "\u8cc7\u7522\u8b70\u50f9",
      "subtitle": "\u6a5f\u6703\u5361",
      "summary": "\u4fdd\u7559\u6b64\u5361\uff1b\u8cfc\u8cb7\u8cc7\u7522\u6642\u53ef\u4ee5\u4f7f\u7528\uff0c\u6210\u672c -1,000",
      "details": [
        "\u4fdd\u7559\u6b64\u5361\uff1b\u8cfc\u8cb7\u8cc7\u7522\u6642\u53ef\u4ee5\u4f7f\u7528\uff0c\u6210\u672c -1,000"
      ],
      "tags": [
        "\u8cc7\u7522",
        "\u4fdd\u7559"
      ],
      "image": "assets/cards/opportunity/45.webp"
    },
    {
      "deck": "asset",
      "number": 1,
      "title": "\u81ea\u52d5\u8ca9\u8ce3\u6a5f",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 6,000\uff0c\u88ab\u52d5\u6536\u5165 +700\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a6,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+700",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u7121"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/asset/01.webp"
    },
    {
      "deck": "asset",
      "number": 2,
      "title": "\u81ea\u52d5\u8ca9\u8ce3\u6a5f",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 6,000\uff0c\u88ab\u52d5\u6536\u5165 +700\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a6,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+700",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u7121"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/asset/02.webp"
    },
    {
      "deck": "asset",
      "number": 3,
      "title": "\u5b58\u80a1 ETF",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 4,000\uff0c\u88ab\u52d5\u6536\u5165 +500\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a4,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+500",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u7121"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/asset/03.webp"
    },
    {
      "deck": "asset",
      "number": 4,
      "title": "\u7db2\u8def\u4e8c\u624b\u5546\u5e97",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 5,000\uff0c\u88ab\u52d5\u6536\u5165 +800\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a5,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+800",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u7121"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/asset/04.webp"
    },
    {
      "deck": "asset",
      "number": 5,
      "title": "\u6578\u4f4d\u7d20\u6750\u5305",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 4,000\uff0c\u88ab\u52d5\u6536\u5165 +1,000\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a4,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,000",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 2"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/asset/05.webp"
    },
    {
      "deck": "asset",
      "number": 6,
      "title": "\u6578\u4f4d\u7d20\u6750\u5305",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 4,000\uff0c\u88ab\u52d5\u6536\u5165 +1,000\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a4,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,000",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 2"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/asset/06.webp"
    },
    {
      "deck": "asset",
      "number": 7,
      "title": "\u89aa\u5b50\u5de5\u4f5c\u574a",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 3,500\uff0c\u88ab\u52d5\u6536\u5165 +1,000\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a3,500",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,000",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5bb6\u5ead\u5099\u80ce\u81f3\u5c11 3\uff1b\u8cfc\u8cb7\u5f8c\u5bb6\u5ead\u5099\u80ce +1"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/asset/07.webp"
    },
    {
      "deck": "asset",
      "number": 8,
      "title": "\u5718\u8cfc\u5c0f\u5e97",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 5,000\uff0c\u88ab\u52d5\u6536\u5165 +1,300\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a5,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,300",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5bb6\u5ead\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/asset/08.webp"
    },
    {
      "deck": "asset",
      "number": 9,
      "title": "\u5c0f\u578b\u505c\u8eca\u683c",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 8,000\uff0c\u88ab\u52d5\u6536\u5165 +1,300\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a8,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,300",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u7121"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/asset/09.webp"
    },
    {
      "deck": "asset",
      "number": 10,
      "title": "\u5065\u5eb7\u4fbf\u7576\u5408\u4f5c",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 8,500\uff0c\u88ab\u52d5\u6536\u5165 +1,400\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a8,500",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,400",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5065\u5eb7\u5099\u80ce\u81f3\u5c11 3\uff1b\u8cfc\u8cb7\u5f8c\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/asset/10.webp"
    },
    {
      "deck": "asset",
      "number": 11,
      "title": "\u7dda\u4e0a\u8ab2\u7a0b",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 9,000\uff0c\u88ab\u52d5\u6536\u5165 +1,500\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a9,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,500",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/asset/11.webp"
    },
    {
      "deck": "asset",
      "number": 12,
      "title": "\u4fdd\u5b88\u50b5\u5238",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 9,000\uff0c\u88ab\u52d5\u6536\u5165 +800\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a9,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+800",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u8ca1\u52d9\u5099\u80ce\u81f3\u5c11 2\uff1b\u8ce3\u51fa\u6642\u53ef\u62ff\u56de 8,000"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/asset/12.webp"
    },
    {
      "deck": "asset",
      "number": 13,
      "title": "\u4fdd\u5b88\u50b5\u5238",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 9,000\uff0c\u88ab\u52d5\u6536\u5165 +800\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a9,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+800",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u8ca1\u52d9\u5099\u80ce\u81f3\u5c11 2\uff1b\u8ce3\u51fa\u6642\u53ef\u62ff\u56de 8,000"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/asset/13.webp"
    },
    {
      "deck": "asset",
      "number": 14,
      "title": "\u51fa\u79df\u8eca\u4f4d",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 10,000\uff0c\u88ab\u52d5\u6536\u5165 +1,800\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a10,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,800",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u7121"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/asset/14.webp"
    },
    {
      "deck": "asset",
      "number": 15,
      "title": "Youtube \u983b\u9053",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 10,000\uff0c\u88ab\u52d5\u6536\u5165 +1,700\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a10,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,700",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/asset/15.webp"
    },
    {
      "deck": "asset",
      "number": 16,
      "title": "\u5c0f\u578b\u8a2d\u5099\u79df\u501f",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 9,000\uff0c\u88ab\u52d5\u6536\u5165 +1,500\uff0c\u56fa\u5b9a\u652f\u51fa +300\u3002",
      "details": [
        "\u6210\u672c\uff1a9,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,500",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+300",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u7121"
      ],
      "tags": [
        "\u501f\u8cb8"
      ],
      "image": "assets/cards/asset/16.webp"
    },
    {
      "deck": "asset",
      "number": 17,
      "title": "\u81ea\u52a9\u6d17\u8863\u6a5f",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 10,000\uff0c\u88ab\u52d5\u6536\u5165 +2,000\uff0c\u56fa\u5b9a\u652f\u51fa +500\u3002",
      "details": [
        "\u6210\u672c\uff1a10,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,000",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+500",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u7121"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/asset/17.webp"
    },
    {
      "deck": "asset",
      "number": 18,
      "title": "\u5c0f\u578b\u5009\u5eab\u51fa\u79df",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 10,000\uff0c\u88ab\u52d5\u6536\u5165 +2,000\uff0c\u56fa\u5b9a\u652f\u51fa +500\u3002",
      "details": [
        "\u6210\u672c\uff1a10,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,000",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+500",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u8ca1\u52d9\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/asset/18.webp"
    },
    {
      "deck": "asset",
      "number": 19,
      "title": "\u505c\u8eca\u5834\u5408\u4f5c",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 16,000\uff0c\u88ab\u52d5\u6536\u5165 +3,000\uff0c\u56fa\u5b9a\u652f\u51fa +1,000\u3002",
      "details": [
        "\u6210\u672c\uff1a16,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+3,000",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+1,000",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5bb6\u5ead\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/asset/19.webp"
    },
    {
      "deck": "asset",
      "number": 20,
      "title": "\u5c0f\u5957\u623f\u51fa\u79df",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 18,000\uff0c\u88ab\u52d5\u6536\u5165 +2,000\uff0c\u56fa\u5b9a\u652f\u51fa +1,000\u3002",
      "details": [
        "\u6210\u672c\uff1a18,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,000",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+1,000",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u8ca1\u52d9\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/asset/20.webp"
    },
    {
      "deck": "asset",
      "number": 21,
      "title": "\u52a0\u76df\u5c0f\u5e97",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 20,000\uff0c\u88ab\u52d5\u6536\u5165 +2,000\uff0c\u56fa\u5b9a\u652f\u51fa +1,000\u3002",
      "details": [
        "\u6210\u672c\uff1a20,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,000",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+1,000",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u8ca1\u52d9\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/asset/21.webp"
    },
    {
      "deck": "asset",
      "number": 22,
      "title": "\u6295\u8cc7\u57fa\u91d1",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 8,000\uff0c\u88ab\u52d5\u6536\u5165 +500\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a8,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+500",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u7121"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/asset/22.webp"
    },
    {
      "deck": "asset",
      "number": 23,
      "title": "\u6295\u8cc7\u57fa\u91d1",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 8,000\uff0c\u88ab\u52d5\u6536\u5165 +500\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a8,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+500",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u7121"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/asset/23.webp"
    },
    {
      "deck": "asset",
      "number": 24,
      "title": "\u8ff7\u4f60\u651d\u5f71\u68da",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 5,000\uff0c\u88ab\u52d5\u6536\u5165 +900\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a5,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+900",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 2"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/asset/24.webp"
    },
    {
      "deck": "asset",
      "number": 25,
      "title": "\u5171\u5b78\u8b80\u66f8\u6703",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 5,000\uff0c\u88ab\u52d5\u6536\u5165 +900\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a5,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+900",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5bb6\u5ead\u5099\u80ce\u81f3\u5c11 2"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/asset/25.webp"
    },
    {
      "deck": "asset",
      "number": 26,
      "title": "\u5065\u8d70\u63ea\u5718\u8ab2",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 5,000\uff0c\u88ab\u52d5\u6536\u5165 +1,100\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a5,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,100",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5065\u5eb7\u5099\u80ce\u81f3\u5c11 2\uff1b\u8cfc\u8cb7\u5f8c\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/asset/26.webp"
    },
    {
      "deck": "asset",
      "number": 27,
      "title": "\u751c\u9ede\u5c0f\u8216",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 9,000\uff0c\u88ab\u52d5\u6536\u5165 +1,300\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a9,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,300",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u7121"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/asset/27.webp"
    },
    {
      "deck": "asset",
      "number": 28,
      "title": "\u684c\u904a\u51fa\u79df\u7bb1",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 9,000\uff0c\u88ab\u52d5\u6536\u5165 +1,200\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a9,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,200",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5bb6\u5ead\u5099\u80ce\u81f3\u5c11 2"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/asset/28.webp"
    },
    {
      "deck": "asset",
      "number": 29,
      "title": "\u624b\u4f5c\u5e02\u96c6\u6524",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 12,000\uff0c\u88ab\u52d5\u6536\u5165 +1,500\uff0c\u56fa\u5b9a\u652f\u51fa +200\u3002",
      "details": [
        "\u6210\u672c\uff1a12,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,500",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+200",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 2"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/asset/29.webp"
    },
    {
      "deck": "asset",
      "number": 30,
      "title": "\u5bf5\u7269\u5bc4\u5bbf\u65c5\u9928",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 10,000\uff0c\u88ab\u52d5\u6536\u5165 +1,400\uff0c\u56fa\u5b9a\u652f\u51fa +300\u3002",
      "details": [
        "\u6210\u672c\uff1a10,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,400",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+300",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5bb6\u5ead\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/asset/30.webp"
    },
    {
      "deck": "asset",
      "number": 31,
      "title": "\u5c0f\u578b\u5ee3\u544a\u770b\u677f",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 10,000\uff0c\u88ab\u52d5\u6536\u5165 +1,600\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a10,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,600",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u8ca1\u52d9\u5099\u80ce\u81f3\u5c11 2"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/asset/31.webp"
    },
    {
      "deck": "asset",
      "number": 32,
      "title": "\u500b\u4eba\u54c1\u724c\u96fb\u5b50\u5831",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 10,000\uff0c\u88ab\u52d5\u6536\u5165 +1,800\uff0c\u56fa\u5b9a\u652f\u51fa 0\u3002",
      "details": [
        "\u6210\u672c\uff1a10,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,800",
        "\u56fa\u5b9a\u652f\u51fa\uff1a0",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/asset/32.webp"
    },
    {
      "deck": "asset",
      "number": 33,
      "title": "\u5065\u8eab\u6559\u7df4\u5206\u6f64",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 12,000\uff0c\u88ab\u52d5\u6536\u5165 +1,700\uff0c\u56fa\u5b9a\u652f\u51fa +300\u3002",
      "details": [
        "\u6210\u672c\uff1a12,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,700",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+300",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5065\u5eb7\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/asset/33.webp"
    },
    {
      "deck": "asset",
      "number": 34,
      "title": "\u82b1\u85dd\u624b\u4f5c\u6559\u5ba4",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 12,000\uff0c\u88ab\u52d5\u6536\u5165 +1,900\uff0c\u56fa\u5b9a\u652f\u51fa +500\u3002",
      "details": [
        "\u6210\u672c\uff1a12,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+1,900",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+500",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/asset/34.webp"
    },
    {
      "deck": "asset",
      "number": 35,
      "title": "\u4e8c\u624b\u5bb6\u5177\u5009\u5eab",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 10,000\uff0c\u88ab\u52d5\u6536\u5165 +2,000\uff0c\u56fa\u5b9a\u652f\u51fa +600\u3002",
      "details": [
        "\u6210\u672c\uff1a10,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,000",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+600",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u8ca1\u52d9\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/asset/35.webp"
    },
    {
      "deck": "asset",
      "number": 36,
      "title": "\u793e\u5340\u5496\u5561\u5ef3",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 10,000\uff0c\u88ab\u52d5\u6536\u5165 +2,100\uff0c\u56fa\u5b9a\u652f\u51fa +700\u3002",
      "details": [
        "\u6210\u672c\uff1a10,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,100",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+700",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5bb6\u5ead\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/asset/36.webp"
    },
    {
      "deck": "asset",
      "number": 37,
      "title": "\u9732\u71df\u88dd\u5099\u79df\u501f",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 10,000\uff0c\u88ab\u52d5\u6536\u5165 +2,200\uff0c\u56fa\u5b9a\u652f\u51fa +700\u3002",
      "details": [
        "\u6210\u672c\uff1a10,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,200",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+700",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5065\u5eb7\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u501f\u8cb8"
      ],
      "image": "assets/cards/asset/37.webp"
    },
    {
      "deck": "asset",
      "number": 38,
      "title": "\u9280\u9aee\u966a\u4f34\u670d\u52d9",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 15,000\uff0c\u88ab\u52d5\u6536\u5165 +2,300\uff0c\u56fa\u5b9a\u652f\u51fa +800\u3002",
      "details": [
        "\u6210\u672c\uff1a15,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,300",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+800",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5bb6\u5ead\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/asset/38.webp"
    },
    {
      "deck": "asset",
      "number": 39,
      "title": "\u5c0f\u578b\u81ea\u52a9\u8ca9\u8ce3\u6ac3",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 15,000\uff0c\u88ab\u52d5\u6536\u5165 +2,100\uff0c\u56fa\u5b9a\u652f\u51fa +500\u3002",
      "details": [
        "\u6210\u672c\uff1a15,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,100",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+500",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u7121"
      ],
      "tags": [
        "\u898f\u5247"
      ],
      "image": "assets/cards/asset/39.webp"
    },
    {
      "deck": "asset",
      "number": 40,
      "title": "\u8a02\u95b1\u5236\u5de5\u5177\u5305",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 16,000\uff0c\u88ab\u52d5\u6536\u5165 +2,400\uff0c\u56fa\u5b9a\u652f\u51fa +700\u3002",
      "details": [
        "\u6210\u672c\uff1a16,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,400",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+700",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 4"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/asset/40.webp"
    },
    {
      "deck": "asset",
      "number": 41,
      "title": "\u6708\u79df\u5de5\u4f5c\u5ba4",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 17,000\uff0c\u88ab\u52d5\u6536\u5165 +2,500\uff0c\u56fa\u5b9a\u652f\u51fa +900\u3002",
      "details": [
        "\u6210\u672c\uff1a17,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,500",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+900",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u8ca1\u52d9\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/asset/41.webp"
    },
    {
      "deck": "asset",
      "number": 42,
      "title": "\u793e\u7fa4\u8ab2\u7a0b\u806f\u76df",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 18,000\uff0c\u88ab\u52d5\u6536\u5165 +2,700\uff0c\u56fa\u5b9a\u652f\u51fa +1,000\u3002",
      "details": [
        "\u6210\u672c\uff1a18,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,700",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+1,000",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 4"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/asset/42.webp"
    },
    {
      "deck": "asset",
      "number": 43,
      "title": "\u9577\u79df\u6a5f\u8eca\u4f4d",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 19,000\uff0c\u88ab\u52d5\u6536\u5165 +2,500\uff0c\u56fa\u5b9a\u652f\u51fa +700\u3002",
      "details": [
        "\u6210\u672c\uff1a19,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,500",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+700",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u8ca1\u52d9\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/asset/43.webp"
    },
    {
      "deck": "asset",
      "number": 44,
      "title": "\u9577\u79df\u6a5f\u8eca\u4f4d",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 19,000\uff0c\u88ab\u52d5\u6536\u5165 +2,500\uff0c\u56fa\u5b9a\u652f\u51fa +700\u3002",
      "details": [
        "\u6210\u672c\uff1a19,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+2,500",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+700",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u8ca1\u52d9\u5099\u80ce\u81f3\u5c11 3"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/asset/44.webp"
    },
    {
      "deck": "asset",
      "number": 45,
      "title": "\u5c0f\u578b\u5171\u4eab\u5eda\u623f",
      "subtitle": "\u8cc7\u7522\u5361",
      "summary": "\u6210\u672c 21,000\uff0c\u88ab\u52d5\u6536\u5165 +3,000\uff0c\u56fa\u5b9a\u652f\u51fa +1,200\u3002",
      "details": [
        "\u6210\u672c\uff1a21,000",
        "\u88ab\u52d5\u6536\u5165\uff1a+3,000",
        "\u56fa\u5b9a\u652f\u51fa\uff1a+1,200",
        "\u689d\u4ef6 / \u7279\u6b8a\uff1a\u5bb6\u5ead\u5099\u80ce\u81f3\u5c11 4"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/asset/45.webp"
    },
    {
      "deck": "decision",
      "number": 1,
      "title": "\u8981\u4e0d\u8981\u9032\u4fee\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 4,000\uff0c\u5de5\u4f5c\u5099\u80ce +2\uff0c\u85aa\u6c34 +1,000 / B\uff1a\u4e0d\u9032\u4fee",
      "details": [
        "A\uff1a\u652f\u4ed8 4,000\uff0c\u5de5\u4f5c\u5099\u80ce +2\uff0c\u85aa\u6c34 +1,000",
        "B\uff1a\u4e0d\u9032\u4fee"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u85aa\u6c34"
      ],
      "image": "assets/cards/decision/01.webp"
    },
    {
      "deck": "decision",
      "number": 2,
      "title": "\u8981\u4e0d\u8981\u8cb7\u4fdd\u96aa\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u56fa\u5b9a\u652f\u51fa +500\uff0c\u7372\u5f97\u4fdd\u96aa / B\uff1a\u4e0d\u8cb7\u4fdd\u96aa",
      "details": [
        "A\uff1a\u56fa\u5b9a\u652f\u51fa +500\uff0c\u7372\u5f97\u4fdd\u96aa",
        "B\uff1a\u4e0d\u8cb7\u4fdd\u96aa"
      ],
      "tags": [
        "\u56fa\u5b9a\u652f\u51fa",
        "\u4fdd\u96aa"
      ],
      "image": "assets/cards/decision/02.webp"
    },
    {
      "deck": "decision",
      "number": 3,
      "title": "\u8981\u4e0d\u8981\u4f11\u606f\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u4f11\u606f\uff0c\u5065\u5eb7\u5099\u80ce +2 / B\uff1a\u4e0d\u4f11\uff0c\u73fe\u91d1 +2,000\uff0c\u5065\u5eb7\u5099\u80ce -1",
      "details": [
        "A\uff1a\u4f11\u606f\uff0c\u5065\u5eb7\u5099\u80ce +2",
        "B\uff1a\u4e0d\u4f11\uff0c\u73fe\u91d1 +2,000\uff0c\u5065\u5eb7\u5099\u80ce -1"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/decision/03.webp"
    },
    {
      "deck": "decision",
      "number": 4,
      "title": "\u8981\u4e0d\u8981\u966a\u5bb6\u4eba\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u966a\u5bb6\u4eba\u51fa\u904a\uff0c\u5bb6\u5ead\u5099\u80ce +2 / B\uff1a\u4e0d\u60f3\u966a\u5bb6\u4eba\uff0c\u73fe\u91d1 +2,000\uff0c\u5bb6\u5ead\u5099\u80ce -1",
      "details": [
        "A\uff1a\u966a\u5bb6\u4eba\u51fa\u904a\uff0c\u5bb6\u5ead\u5099\u80ce +2",
        "B\uff1a\u4e0d\u60f3\u966a\u5bb6\u4eba\uff0c\u73fe\u91d1 +2,000\uff0c\u5bb6\u5ead\u5099\u80ce -1"
      ],
      "tags": [
        "\u5bb6\u5ead",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/decision/04.webp"
    },
    {
      "deck": "decision",
      "number": 5,
      "title": "\u8981\u4e0d\u8981\u5efa\u7acb\u7dca\u6025\u9810\u5099\u91d1\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u628a 3,000 \u5f9e\u73fe\u91d1\u79fb\u5230\u5132\u84c4\uff0c\u8ca1\u52d9\u5099\u80ce +1 / B\uff1a\u4e0d\u5b58\u9322\uff0c\u73fe\u91d1 +1,000",
      "details": [
        "A\uff1a\u628a 3,000 \u5f9e\u73fe\u91d1\u79fb\u5230\u5132\u84c4\uff0c\u8ca1\u52d9\u5099\u80ce +1",
        "B\uff1a\u4e0d\u5b58\u9322\uff0c\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u8ca1\u52d9",
        "\u73fe\u91d1",
        "\u5132\u84c4"
      ],
      "image": "assets/cards/decision/05.webp"
    },
    {
      "deck": "decision",
      "number": 6,
      "title": "\u8981\u4e0d\u8981\u505a\u526f\u696d\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 4,000\uff0c\u88ab\u52d5\u6536\u5165 +700\uff0c\u5065\u5eb7\u5099\u80ce -1 / B\uff1a\u4e0d\u505a\u526f\u696d\uff0c\u5065\u5eb7\u5099\u80ce +1",
      "details": [
        "A\uff1a\u652f\u4ed8 4,000\uff0c\u88ab\u52d5\u6536\u5165 +700\uff0c\u5065\u5eb7\u5099\u80ce -1",
        "B\uff1a\u4e0d\u505a\u526f\u696d\uff0c\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u88ab\u52d5\u6536\u5165"
      ],
      "image": "assets/cards/decision/06.webp"
    },
    {
      "deck": "decision",
      "number": 7,
      "title": "\u8981\u4e0d\u8981\u63d0\u524d\u9084\u50b5\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u5982\u679c\u6709\u8ca0\u50b5\uff0c\u53ef\u4ee5\u652f\u4ed8 5,500\uff0c\u8ca0\u50b5 -5,000\uff0c\u56fa\u5b9a\u652f\u51fa -500 / B\uff1a\u66ab\u6642\u4e0d\u9084",
      "details": [
        "A\uff1a\u5982\u679c\u6709\u8ca0\u50b5\uff0c\u53ef\u4ee5\u652f\u4ed8 5,500\uff0c\u8ca0\u50b5 -5,000\uff0c\u56fa\u5b9a\u652f\u51fa -500",
        "B\uff1a\u66ab\u6642\u4e0d\u9084"
      ],
      "tags": [
        "\u56fa\u5b9a\u652f\u51fa",
        "\u8ca0\u50b5"
      ],
      "image": "assets/cards/decision/07.webp"
    },
    {
      "deck": "decision",
      "number": 8,
      "title": "\u8981\u4e0d\u8981\u5192\u96aa\u6295\u8cc7\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 3,000 \u6295\u8cc7\u4e26\u64f2\u9ab0\uff0c\u8ca1\u52d9\u5099\u80ce -1\uff1b1 \u5230 3 \u62ff\u56de 1,000\uff1b4 \u5230 6 \u62ff\u56de 9,000 / B\uff1a\u4e0d\u6295\u8cc7",
      "details": [
        "A\uff1a\u652f\u4ed8 3,000 \u6295\u8cc7\u4e26\u64f2\u9ab0\uff0c\u8ca1\u52d9\u5099\u80ce -1\uff1b1 \u5230 3 \u62ff\u56de 1,000\uff1b4 \u5230 6 \u62ff\u56de 9,000",
        "B\uff1a\u4e0d\u6295\u8cc7"
      ],
      "tags": [
        "\u8ca1\u52d9",
        "\u9ab0\u5b50"
      ],
      "image": "assets/cards/decision/08.webp"
    },
    {
      "deck": "decision",
      "number": 9,
      "title": "\u8981\u4e0d\u8981\u63a5\u9ad8\u58d3\u6848\u5b50\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u63a5\u6848\uff0c\u73fe\u91d1 +4,000\uff0c\u5065\u5eb7\u5099\u80ce -1 / B\uff1a\u4e0d\u63a5\u6848\uff0c\u5065\u5eb7\u5099\u80ce +1",
      "details": [
        "A\uff1a\u63a5\u6848\uff0c\u73fe\u91d1 +4,000\uff0c\u5065\u5eb7\u5099\u80ce -1",
        "B\uff1a\u4e0d\u63a5\u6848\uff0c\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/decision/09.webp"
    },
    {
      "deck": "decision",
      "number": 10,
      "title": "\u8981\u4e0d\u8981\u63db\u5de5\u4f5c\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u5982\u679c\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 4\uff0c\u85aa\u6c34 +2,000\uff1b\u5982\u679c\u4e0d\u5230 4\uff0c\u5de5\u4f5c\u5099\u80ce -1 / B\uff1a\u7559\u5728\u539f\u5de5\u4f5c",
      "details": [
        "A\uff1a\u5982\u679c\u5de5\u4f5c\u5099\u80ce\u81f3\u5c11 4\uff0c\u85aa\u6c34 +2,000\uff1b\u5982\u679c\u4e0d\u5230 4\uff0c\u5de5\u4f5c\u5099\u80ce -1",
        "B\uff1a\u7559\u5728\u539f\u5de5\u4f5c"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u85aa\u6c34"
      ],
      "image": "assets/cards/decision/10.webp"
    },
    {
      "deck": "decision",
      "number": 11,
      "title": "\u8981\u4e0d\u8981\u5bb6\u5ead\u65c5\u884c\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 3,000\uff0c\u5bb6\u5ead\u5099\u80ce +1\uff0c\u5065\u5eb7\u5099\u80ce +1 / B\uff1a\u4e0d\u65c5\u884c",
      "details": [
        "A\uff1a\u652f\u4ed8 3,000\uff0c\u5bb6\u5ead\u5099\u80ce +1\uff0c\u5065\u5eb7\u5099\u80ce +1",
        "B\uff1a\u4e0d\u65c5\u884c"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/decision/11.webp"
    },
    {
      "deck": "decision",
      "number": 12,
      "title": "\u8981\u4e0d\u8981\u53c3\u52a0\u8ca1\u5546\u8ab2\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 2,000\uff0c\u8ca1\u52d9\u5099\u80ce +1 / B\uff1a\u4e0d\u53c3\u52a0",
      "details": [
        "A\uff1a\u652f\u4ed8 2,000\uff0c\u8ca1\u52d9\u5099\u80ce +1",
        "B\uff1a\u4e0d\u53c3\u52a0"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/decision/12.webp"
    },
    {
      "deck": "decision",
      "number": 13,
      "title": "\u8981\u4e0d\u8981\u5b78\u7fd2\u8a18\u5e33\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 3,000\uff0c\u8ca1\u52d9\u5099\u80ce +1\uff0c\u56fa\u5b9a\u652f\u51fa -500 / B\uff1a\u4e0d\u8a18\u5e33\uff0c\u56fa\u5b9a\u652f\u51fa +500",
      "details": [
        "A\uff1a\u652f\u4ed8 3,000\uff0c\u8ca1\u52d9\u5099\u80ce +1\uff0c\u56fa\u5b9a\u652f\u51fa -500",
        "B\uff1a\u4e0d\u8a18\u5e33\uff0c\u56fa\u5b9a\u652f\u51fa +500"
      ],
      "tags": [
        "\u8ca1\u52d9",
        "\u56fa\u5b9a\u652f\u51fa"
      ],
      "image": "assets/cards/decision/13.webp"
    },
    {
      "deck": "decision",
      "number": 14,
      "title": "\u8981\u4e0d\u8981\u5b9a\u671f\u904b\u52d5\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 1,000\uff0c\u5065\u5eb7\u5099\u80ce +2 / B\uff1a\u4e0d\u904b\u52d5\uff0c\u73fe\u91d1 +2,000\uff0c\u5065\u5eb7\u5099\u80ce -1",
      "details": [
        "A\uff1a\u652f\u4ed8 1,000\uff0c\u5065\u5eb7\u5099\u80ce +2",
        "B\uff1a\u4e0d\u904b\u52d5\uff0c\u73fe\u91d1 +2,000\uff0c\u5065\u5eb7\u5099\u80ce -1"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/decision/14.webp"
    },
    {
      "deck": "decision",
      "number": 15,
      "title": "\u8981\u4e0d\u8981\u966a\u5bb6\u4eba\u5403\u98ef\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 1,500\uff0c\u5bb6\u5ead\u5099\u80ce +2 / B\uff1a\u4e0d\u966a\u5bb6\u4eba\uff0c\u73fe\u91d1 +3,000\uff0c\u5bb6\u5ead\u5099\u80ce -1",
      "details": [
        "A\uff1a\u652f\u4ed8 1,500\uff0c\u5bb6\u5ead\u5099\u80ce +2",
        "B\uff1a\u4e0d\u966a\u5bb6\u4eba\uff0c\u73fe\u91d1 +3,000\uff0c\u5bb6\u5ead\u5099\u80ce -1"
      ],
      "tags": [
        "\u5bb6\u5ead",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/decision/15.webp"
    },
    {
      "deck": "decision",
      "number": 16,
      "title": "\u8981\u4e0d\u8981\u627f\u63a5\u77ed\u6848\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u73fe\u91d1 +3,000\uff0c\u5065\u5eb7\u5099\u80ce -1 / B\uff1a\u4e0d\u63a5\u6848\uff0c\u5065\u5eb7\u5099\u80ce +1",
      "details": [
        "A\uff1a\u73fe\u91d1 +3,000\uff0c\u5065\u5eb7\u5099\u80ce -1",
        "B\uff1a\u4e0d\u63a5\u6848\uff0c\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/decision/16.webp"
    },
    {
      "deck": "decision",
      "number": 17,
      "title": "\u8981\u4e0d\u8981\u8cb7\u9032\u4fee\u66f8\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 2,000\uff0c\u5de5\u4f5c\u5099\u80ce +1 / B\uff1a\u4e0d\u8cb7\u66f8\uff0c\u73fe\u91d1 +1,000",
      "details": [
        "A\uff1a\u652f\u4ed8 2,000\uff0c\u5de5\u4f5c\u5099\u80ce +1",
        "B\uff1a\u4e0d\u8cb7\u66f8\uff0c\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/decision/17.webp"
    },
    {
      "deck": "decision",
      "number": 18,
      "title": "\u8981\u4e0d\u8981\u6574\u7406\u50b5\u52d9\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u5982\u679c\u6709\u8ca0\u50b5\uff0c\u652f\u4ed8 5,500\uff0c\u8ca0\u50b5 -5,000 / B\uff1a\u66ab\u6642\u4e0d\u6574\u7406\uff0c\u73fe\u91d1 +1,000",
      "details": [
        "A\uff1a\u5982\u679c\u6709\u8ca0\u50b5\uff0c\u652f\u4ed8 5,500\uff0c\u8ca0\u50b5 -5,000",
        "B\uff1a\u66ab\u6642\u4e0d\u6574\u7406\uff0c\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u73fe\u91d1",
        "\u8ca0\u50b5"
      ],
      "image": "assets/cards/decision/18.webp"
    },
    {
      "deck": "decision",
      "number": 19,
      "title": "\u8981\u4e0d\u8981\u62bc\u6ce8\u8ced\u535a\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 2,000 \u4e26\u64f2\u9ab0\uff0c\u8ca1\u52d9\u5099\u80ce -1\uff1b1 \u5230 4 \u62ff\u56de 1,000\uff1b5 \u5230 6 \u62ff\u56de 10,000 / B\uff1a\u4e0d\u8ced",
      "details": [
        "A\uff1a\u652f\u4ed8 2,000 \u4e26\u64f2\u9ab0\uff0c\u8ca1\u52d9\u5099\u80ce -1\uff1b1 \u5230 4 \u62ff\u56de 1,000\uff1b5 \u5230 6 \u62ff\u56de 10,000",
        "B\uff1a\u4e0d\u8ced"
      ],
      "tags": [
        "\u8ca1\u52d9",
        "\u9ab0\u5b50"
      ],
      "image": "assets/cards/decision/19.webp"
    },
    {
      "deck": "decision",
      "number": 20,
      "title": "\u8981\u4e0d\u8981\u8cb7\u5065\u5eb7\u6aa2\u67e5\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 2,500\uff0c\u5065\u5eb7\u5099\u80ce +1 / B\uff1a\u4e0d\u6aa2\u67e5\uff0c\u73fe\u91d1 +1,000",
      "details": [
        "A\uff1a\u652f\u4ed8 2,500\uff0c\u5065\u5eb7\u5099\u80ce +1",
        "B\uff1a\u4e0d\u6aa2\u67e5\uff0c\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/decision/20.webp"
    },
    {
      "deck": "decision",
      "number": 21,
      "title": "\u8981\u4e0d\u8981\u53c3\u52a0\u516c\u53f8\u805a\u6703\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 3,000\uff0c\u5de5\u4f5c\u5099\u80ce +1 / B\uff1a\u4e0d\u53c3\u52a0\uff0c\u5065\u5eb7\u5099\u80ce +1",
      "details": [
        "A\uff1a\u652f\u4ed8 3,000\uff0c\u5de5\u4f5c\u5099\u80ce +1",
        "B\uff1a\u4e0d\u53c3\u52a0\uff0c\u5065\u5eb7\u5099\u80ce +1"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/decision/21.webp"
    },
    {
      "deck": "decision",
      "number": 22,
      "title": "\u8981\u4e0d\u8981\u5347\u7d1a\u8a2d\u5099\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 6,000\uff0c\u88ab\u52d5\u6536\u5165 +500 / B\uff1a\u4e0d\u5347\u7d1a\uff0c\u73fe\u91d1 +1,000",
      "details": [
        "A\uff1a\u652f\u4ed8 6,000\uff0c\u88ab\u52d5\u6536\u5165 +500",
        "B\uff1a\u4e0d\u5347\u7d1a\uff0c\u73fe\u91d1 +1,000"
      ],
      "tags": [
        "\u73fe\u91d1",
        "\u88ab\u52d5\u6536\u5165"
      ],
      "image": "assets/cards/decision/22.webp"
    },
    {
      "deck": "decision",
      "number": 23,
      "title": "\u8981\u4e0d\u8981\u4f11\u5047\u5145\u96fb\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u4f11\u5047\uff0c\u5065\u5eb7\u5099\u80ce +1\uff0c\u73fe\u91d1 -1,000 / B\uff1a\u7e7c\u7e8c\u5de5\u4f5c\uff0c\u73fe\u91d1 +2,000\uff0c\u5065\u5eb7\u5099\u80ce -1",
      "details": [
        "A\uff1a\u4f11\u5047\uff0c\u5065\u5eb7\u5099\u80ce +1\uff0c\u73fe\u91d1 -1,000",
        "B\uff1a\u7e7c\u7e8c\u5de5\u4f5c\uff0c\u73fe\u91d1 +2,000\uff0c\u5065\u5eb7\u5099\u80ce -1"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u73fe\u91d1"
      ],
      "image": "assets/cards/decision/23.webp"
    },
    {
      "deck": "decision",
      "number": 24,
      "title": "\u8981\u4e0d\u8981\u8ac7\u52a0\u85aa\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u5982\u679c\u5de5\u4f5c\u5099\u80ce 4 \u4ee5\u4e0a\uff0c\u53ef\u8ac7\u52a0\u85aa\uff1b\u64f2\u9ab0 4 \u5230 6 \u6642\u85aa\u6c34 +1,500 / B\uff1a\u66ab\u6642\u4e0d\u8ac7\uff0c\u5de5\u4f5c\u5099\u80ce +1",
      "details": [
        "A\uff1a\u5982\u679c\u5de5\u4f5c\u5099\u80ce 4 \u4ee5\u4e0a\uff0c\u53ef\u8ac7\u52a0\u85aa\uff1b\u64f2\u9ab0 4 \u5230 6 \u6642\u85aa\u6c34 +1,500",
        "B\uff1a\u66ab\u6642\u4e0d\u8ac7\uff0c\u5de5\u4f5c\u5099\u80ce +1"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u85aa\u6c34",
        "\u9ab0\u5b50"
      ],
      "image": "assets/cards/decision/24.webp"
    },
    {
      "deck": "decision",
      "number": 25,
      "title": "\u8981\u4e0d\u8981\u53c3\u8207\u5bb6\u65cf\u6d3b\u52d5\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 2,000\uff0c\u5bb6\u5ead\u5099\u80ce +1 / B\uff1a\u4e0d\u53c3\u52a0\uff0c\u5bb6\u5ead\u5099\u80ce -1",
      "details": [
        "A\uff1a\u652f\u4ed8 2,000\uff0c\u5bb6\u5ead\u5099\u80ce +1",
        "B\uff1a\u4e0d\u53c3\u52a0\uff0c\u5bb6\u5ead\u5099\u80ce -1"
      ],
      "tags": [
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/decision/25.webp"
    },
    {
      "deck": "decision",
      "number": 26,
      "title": "\u8981\u4e0d\u8981\u5b58\u6559\u80b2\u57fa\u91d1\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 3,000\uff0c\u8ca1\u52d9\u5099\u80ce +1 / B\uff1a\u4e0d\u5b58\u57fa\u91d1",
      "details": [
        "A\uff1a\u652f\u4ed8 3,000\uff0c\u8ca1\u52d9\u5099\u80ce +1",
        "B\uff1a\u4e0d\u5b58\u57fa\u91d1"
      ],
      "tags": [
        "\u8ca1\u52d9"
      ],
      "image": "assets/cards/decision/26.webp"
    },
    {
      "deck": "decision",
      "number": 27,
      "title": "\u8981\u4e0d\u8981\u5916\u5305\u96dc\u52d9\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 1,500\uff0c\u5065\u5eb7\u5099\u80ce +1\uff0c\u5de5\u4f5c\u5099\u80ce +1 / B\uff1a\u81ea\u5df1\u8655\u7406\uff0c\u5065\u5eb7\u5099\u80ce -1",
      "details": [
        "A\uff1a\u652f\u4ed8 1,500\uff0c\u5065\u5eb7\u5099\u80ce +1\uff0c\u5de5\u4f5c\u5099\u80ce +1",
        "B\uff1a\u81ea\u5df1\u8655\u7406\uff0c\u5065\u5eb7\u5099\u80ce -1"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u5065\u5eb7"
      ],
      "image": "assets/cards/decision/27.webp"
    },
    {
      "deck": "decision",
      "number": 28,
      "title": "\u8981\u4e0d\u8981\u8cfc\u8cb7\u4fdd\u96aa\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u56fa\u5b9a\u652f\u51fa +300\uff0c\u4e8b\u4ef6\u91d1\u9322\u640d\u5931\u5c11\u4ed8 1,000 / B\uff1a\u4e0d\u5347\u7d1a",
      "details": [
        "A\uff1a\u56fa\u5b9a\u652f\u51fa +300\uff0c\u4e8b\u4ef6\u91d1\u9322\u640d\u5931\u5c11\u4ed8 1,000",
        "B\uff1a\u4e0d\u5347\u7d1a"
      ],
      "tags": [
        "\u56fa\u5b9a\u652f\u51fa",
        "\u4fdd\u96aa"
      ],
      "image": "assets/cards/decision/28.webp"
    },
    {
      "deck": "decision",
      "number": 29,
      "title": "\u8981\u4e0d\u8981\u958b\u767c\u526f\u696d\u7522\u54c1\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 5,000\uff0c\u88ab\u52d5\u6536\u5165 +800\uff0c\u5065\u5eb7\u5099\u80ce -1 / B\uff1a\u4e0d\u958b\u767c",
      "details": [
        "A\uff1a\u652f\u4ed8 5,000\uff0c\u88ab\u52d5\u6536\u5165 +800\uff0c\u5065\u5eb7\u5099\u80ce -1",
        "B\uff1a\u4e0d\u958b\u767c"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u88ab\u52d5\u6536\u5165"
      ],
      "image": "assets/cards/decision/29.webp"
    },
    {
      "deck": "decision",
      "number": 30,
      "title": "\u8981\u4e0d\u8981\u6295\u8cc7\u4eba\u8108\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 2,000\uff0c\u5de5\u4f5c\u5099\u80ce +1 / B\uff1a\u4e0d\u6295\u8cc7\u4eba\u8108",
      "details": [
        "A\uff1a\u652f\u4ed8 2,000\uff0c\u5de5\u4f5c\u5099\u80ce +1",
        "B\uff1a\u4e0d\u6295\u8cc7\u4eba\u8108"
      ],
      "tags": [
        "\u5de5\u4f5c"
      ],
      "image": "assets/cards/decision/30.webp"
    },
    {
      "deck": "decision",
      "number": 31,
      "title": "\u8981\u4e0d\u8981\u6574\u4fee\u51fa\u79df\u7269\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u5982\u679c\u6709\u51fa\u79df\u8cc7\u7522\uff0c\u652f\u4ed8 5,000\uff0c\u88ab\u52d5\u6536\u5165 +600 / B\uff1a\u4e0d\u6574\u4fee",
      "details": [
        "A\uff1a\u5982\u679c\u6709\u51fa\u79df\u8cc7\u7522\uff0c\u652f\u4ed8 5,000\uff0c\u88ab\u52d5\u6536\u5165 +600",
        "B\uff1a\u4e0d\u6574\u4fee"
      ],
      "tags": [
        "\u88ab\u52d5\u6536\u5165",
        "\u8cc7\u7522"
      ],
      "image": "assets/cards/decision/31.webp"
    },
    {
      "deck": "decision",
      "number": 32,
      "title": "\u8981\u4e0d\u8981\u5efa\u7acb\u81ea\u52d5\u5132\u84c4\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u73fe\u91d1 -2,000\uff0c\u8ca1\u52d9\u5099\u80ce +1\uff0c\u56fa\u5b9a\u652f\u51fa -200 / B\uff1a\u4e0d\u8a2d\u5b9a",
      "details": [
        "A\uff1a\u73fe\u91d1 -2,000\uff0c\u8ca1\u52d9\u5099\u80ce +1\uff0c\u56fa\u5b9a\u652f\u51fa -200",
        "B\uff1a\u4e0d\u8a2d\u5b9a"
      ],
      "tags": [
        "\u8ca1\u52d9",
        "\u73fe\u91d1",
        "\u56fa\u5b9a\u652f\u51fa",
        "\u5132\u84c4"
      ],
      "image": "assets/cards/decision/32.webp"
    },
    {
      "deck": "decision",
      "number": 33,
      "title": "\u8981\u4e0d\u8981\u5192\u96aa\u8f49\u8077\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u5982\u679c\u5de5\u4f5c\u5099\u80ce 4 \u4ee5\u4e0a\uff0c\u53ef\u9078\u64c7\u8f49\u8077\uff1b\u64f2\u9ab0 5 \u5230 6 \u6642\u8f49\u8077\u6210\u529f\uff0c\u85aa\u6c34 +2,000 / B\uff1a\u7559\u5728\u539f\u5de5\u4f5c",
      "details": [
        "A\uff1a\u5982\u679c\u5de5\u4f5c\u5099\u80ce 4 \u4ee5\u4e0a\uff0c\u53ef\u9078\u64c7\u8f49\u8077\uff1b\u64f2\u9ab0 5 \u5230 6 \u6642\u8f49\u8077\u6210\u529f\uff0c\u85aa\u6c34 +2,000",
        "B\uff1a\u7559\u5728\u539f\u5de5\u4f5c"
      ],
      "tags": [
        "\u5de5\u4f5c",
        "\u85aa\u6c34",
        "\u9ab0\u5b50"
      ],
      "image": "assets/cards/decision/33.webp"
    },
    {
      "deck": "decision",
      "number": 34,
      "title": "\u8981\u4e0d\u8981\u5b89\u6392\u5bb6\u5ead\u65e5\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u652f\u4ed8 2,000\uff0c\u5bb6\u5ead\u5099\u80ce +2\uff0c\u5065\u5eb7\u5099\u80ce +1 / B\uff1a\u4e0d\u5b89\u6392\uff0c\u5bb6\u5ead\u5099\u80ce -1",
      "details": [
        "A\uff1a\u652f\u4ed8 2,000\uff0c\u5bb6\u5ead\u5099\u80ce +2\uff0c\u5065\u5eb7\u5099\u80ce +1",
        "B\uff1a\u4e0d\u5b89\u6392\uff0c\u5bb6\u5ead\u5099\u80ce -1"
      ],
      "tags": [
        "\u5065\u5eb7",
        "\u5bb6\u5ead"
      ],
      "image": "assets/cards/decision/34.webp"
    },
    {
      "deck": "decision",
      "number": 35,
      "title": "\u8981\u4e0d\u8981\u7e2e\u6e1b\u751f\u6d3b\u958b\u92b7\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u64f2\u9ab0 4 \u5230 6 \u6642\u56fa\u5b9a\u652f\u51fa -300\uff0c\u8ca1\u52d9\u5099\u80ce +1 / B\uff1a\u4e0d\u7e2e\u6e1b\uff0c\u56fa\u5b9a\u652f\u51fa +500",
      "details": [
        "A\uff1a\u64f2\u9ab0 4 \u5230 6 \u6642\u56fa\u5b9a\u652f\u51fa -300\uff0c\u8ca1\u52d9\u5099\u80ce +1",
        "B\uff1a\u4e0d\u7e2e\u6e1b\uff0c\u56fa\u5b9a\u652f\u51fa +500"
      ],
      "tags": [
        "\u8ca1\u52d9",
        "\u56fa\u5b9a\u652f\u51fa",
        "\u9ab0\u5b50"
      ],
      "image": "assets/cards/decision/35.webp"
    },
    {
      "deck": "decision",
      "number": 36,
      "title": "\u8981\u4e0d\u8981\u7e2e\u6e1b\u751f\u6d3b\u958b\u92b7\uff1f",
      "subtitle": "\u6289\u64c7\u5361",
      "summary": "A\uff1a\u64f2\u9ab0 4 \u5230 6 \u6642\u56fa\u5b9a\u652f\u51fa -300\uff0c\u8ca1\u52d9\u5099\u80ce +1 / B\uff1a\u4e0d\u7e2e\u6e1b\uff0c\u56fa\u5b9a\u652f\u51fa +500",
      "details": [
        "A\uff1a\u64f2\u9ab0 4 \u5230 6 \u6642\u56fa\u5b9a\u652f\u51fa -300\uff0c\u8ca1\u52d9\u5099\u80ce +1",
        "B\uff1a\u4e0d\u7e2e\u6e1b\uff0c\u56fa\u5b9a\u652f\u51fa +500"
      ],
      "tags": [
        "\u8ca1\u52d9",
        "\u56fa\u5b9a\u652f\u51fa",
        "\u9ab0\u5b50"
      ],
      "image": "assets/cards/decision/36.webp"
    },
    {
      "deck": "special",
      "number": 1,
      "title": "\u4eba\u60c5\u5361",
      "subtitle": "\u7279\u6b8a\u5361",
      "summary": "\u7206\u80ce\u6642\u53ef\u4e1f\u68c4 1 \u5f35\u4eba\u60c5\u5361\uff0c\u4e0d\u652f\u4ed8\u4fee\u88dc\u8cbb\u4e5f\u4e0d\u501f\u9322\uff0c\u4f9d v0.5 \u898f\u5247\u5c07\u7206\u80ce\u5099\u80ce\u6062\u5fa9\u5230 2\uff1b\u672a\u7528\u6389\u6bcf\u5f35 +1,000 \u5206\u3002",
      "details": [
        "\u7206\u80ce\u6642\u53ef\u4e1f\u68c4 1 \u5f35\u4eba\u60c5\u5361\u3002",
        "\u4e0d\u9700\u8981\u652f\u4ed8\u4fee\u88dc\u8cbb\uff0c\u4e5f\u4e0d\u9700\u8981\u501f\u9322\u3002",
        "\u4f9d v0.5 \u898f\u5247\u76f4\u63a5\u5c07\u7206\u80ce\u5099\u80ce\u6062\u5fa9\u5230 2\u3002",
        "\u904a\u6232\u7d50\u675f\u6642\uff0c\u6c92\u7528\u6389\u7684\u4eba\u60c5\u5361\u6bcf\u5f35 +1,000 \u5206\u3002",
        "\u6bcf\u6b21\u7206\u80ce\u6700\u591a\u4f7f\u7528 1 \u5f35\uff0c\u6bcf\u4f4d\u73a9\u5bb6\u6700\u591a\u6301\u6709 2 \u5f35\u3002"
      ],
      "tags": [
        "\u7206\u80ce",
        "\u4e92\u52a9",
        "\u5206\u6578"
      ],
      "image": "assets/cards/special/favor.webp"
    },
    {
      "deck": "special",
      "number": 2,
      "title": "\u501f\u8cb8\u5361",
      "subtitle": "\u7279\u6b8a\u5361",
      "summary": "\u6bcf\u5f35\u4ee3\u8868\u6b20\u9280\u884c 5,000 \u5143\uff0c\u6bcf\u6b21\u73fe\u91d1\u6d41\u65e5\u652f\u4ed8\u5229\u606f 500 \u5143\uff0c\u4e26\u8a18\u5165\u56fa\u5b9a\u652f\u51fa\u3002",
      "details": [
        "\u501f\u6b3e\u4e00\u6b21\uff1a\u73fe\u91d1 +5,000\u3001\u8ca0\u50b5 +5,000\u3001\u56fa\u5b9a\u652f\u51fa +500\u3002",
        "\u6bcf\u5f35\u501f\u8cb8\u5361\u4ee3\u8868 5,000 \u5143\u8ca0\u50b5\u3002",
        "\u6bcf\u6b21\u73fe\u91d1\u6d41\u65e5\u652f\u4ed8\u5229\u606f 500 \u5143\u3002",
        "\u9084\u6b3e\u6642\u6bcf 5,000 \u672c\u91d1\u9700\u53e6\u4ed8 500 \u624b\u7e8c\u8cbb\u3002"
      ],
      "tags": [
        "\u501f\u8cb8",
        "\u8ca0\u50b5",
        "\u56fa\u5b9a\u652f\u51fa"
      ],
      "image": "assets/cards/special/loan.webp"
    }
  ]
};
